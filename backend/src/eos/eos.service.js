const _ = require('lodash');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const Eos = require('eosjs');
const config = require('config');

const eos = Eos.Localnet(config.get('eos'));
const maxListSize = 100;

class EosService {}

EosService.prototype.getBlock = async(blockNumber => {
  const block = await(eos.getBlock(blockNumber));
  return block;
});

EosService.prototype.getBlocks = async((size = 1) => {
  const headBlockNumber = await(getHeadBlockNumber());
  const numberOfBlocks = validateSize(size);

  return fetchBlocks(numberOfBlocks, headBlockNumber);
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