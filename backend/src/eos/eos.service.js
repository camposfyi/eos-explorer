const _ = require('lodash');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const Eos = require('eosjs');
const config = require('config');

const eos = Eos.Localnet(config.get('eos'));
const maxListSize = 100;

class EosService {}

EosService.prototype.getBlockList = async((size = 1) => {

  const headBlockNumber = await(getHeadBlockNumber());

  const numberOfBlocks = validateSize(size);
  const blocks = await(fetchBlocks(numberOfBlocks, headBlockNumber));

  return _.map(blocks, block => ({
    id: block.id,
    blockNumber: block.block_num,
    timestamp: block.timestamp,
    actionCount: _.size(block.input_transactions)
  }));
});

function fetchBlocks(numberOfBlocks, headBlockNumber) {
  const promises = [];
  for(let i=0; i<numberOfBlocks; i++) {
    promises.push(eos.getBlock(headBlockNumber - i));
  }
  return promises;
}

function validateSize(size) {
  if (size <= 0) {
    return 1;
  }
  return _.min([size, maxListSize]);
}

function getHeadBlockNumber() {
  return eos.getInfo({})
    .then(info => _.get(info, 'head_block_num'));
}

module.exports = new EosService();