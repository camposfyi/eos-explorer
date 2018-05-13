const _ = require('lodash');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const assert = require('assert');
const rewire = require('rewire');
const Chance = require('chance');
const chance = new Chance();

const eosService = rewire('../../src/eos/eos.service');

describe('EOS Service', () => {

  describe('Retrieving blocks', () => {

    const size = chance.integer({min: 1, max: 10});
    const head_block_num = 100;
    const mockBlock = createMockBlock();

    before(() => {
      eosService.__set__('eos.getInfo', () => Promise.resolve({head_block_num}));
      eosService.__set__('eos.getBlock', () => Promise.resolve(mockBlock));
    });

    it('retrieves the number of blocks requested', async(() => {
      const list = await(eosService.getBlockList(size));
      assert.equal(list.length, size);
    }));

    it('retrieves one block if size is not specified', async(() => {
      const list = await(eosService.getBlockList(undefined));
      assert.equal(list.length, 1);
    }));

    it('retrieves one block if specified size is less than one', async(() => {
      const list = await(eosService.getBlockList(0));
      assert.equal(list.length, 1);
    }));

    it('retrieves at most 100 blocks if specified size is greater than 100', async(() => {
      const list = await(eosService.getBlockList(101));
      assert.equal(list.length, 100);
    }));

    it('has properties number, hash, timestamp, and action count', async(() => {
      const list = await(eosService.getBlockList());
      const block = _.first(list);

      assert.equal(_.size(_.keys(block)), 4);
      assert.ok(_.has(block, 'id'));
      assert.ok(_.has(block, 'blockNumber'));
      assert.ok(_.has(block, 'timestamp'));
      assert.ok(_.has(block, 'actionCount'));
    }));
  });
  
  
  function createMockBlock() {
    return {
      previous: chance.hash(),
      timestamp: chance.date().toString(),
      transaction_mroot: chance.hash(),
      action_mroot: chance.hash(),
      block_mroot: chance.hash(),
      producer: chance.string(),
      schedule_version: chance.integer(),
      new_producers: null,
      producer_signature: chance.hash(),
      regions: [
        {
          region: chance.integer(),
          cycles_summary: [
            [
              {
                read_locks: [],
                write_locks: [],
                transactions: [
                  {
                    status: chance.string(),
                    kcpu_usage: chance.integer(),
                    net_usage_words: chance.integer(),
                    id: chance.hash()
                  }
                ]
              }
            ]
          ]
        }
      ],
      input_transactions: [],
      id: chance.hash(),
      block_num: chance.integer(),
      ref_block_prefix: chance.integer()
    }
  }


});