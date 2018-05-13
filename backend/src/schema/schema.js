const graphql = require('graphql');
const eosService = require('../eos/eos.service');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList

} = graphql;

const Transaction = new GraphQLObjectType({
  name: 'Transaction',
  fields: {
    id: {type: GraphQLString},
    status: {type: GraphQLString},
    kcpu_usage: {type: GraphQLInt},
    net_usage_words: {type: GraphQLInt}
  }
});

const Cycle = new GraphQLObjectType({
  name: 'Cycle',
  fields: {
    read_locks: {type: new GraphQLList(GraphQLString)},
    write_locks: {type: new GraphQLList(GraphQLString)},
    transactions: {type: new GraphQLList(Transaction)}
  }
});

const Region = new GraphQLObjectType({
  name: 'Region',
  fields: {
    region: {type: GraphQLInt},
    cycles_summary: {type: new GraphQLList(Cycle)}
  }
});

const Block = new GraphQLObjectType({
  name: 'Block',
  description: 'Block description',
  fields: {
    previous: {type: GraphQLString},
    timestamp: {type: GraphQLString},
    transaction_mroot: {type: GraphQLString},
    action_mroot: {type: GraphQLString},
    block_mroot: {type: GraphQLString},
    producer: {type: GraphQLString},
    schedule_version: {type: GraphQLInt},
    new_producers: {type: new GraphQLList(GraphQLString)},
    producer_signature: {type: GraphQLString},
    regions: {type: new GraphQLList(Region)},
    input_transactions: {type: new GraphQLList(GraphQLString)},
    id: {type: GraphQLString},
    block_num: {type: GraphQLInt},
    ref_block_prefix: {type: GraphQLInt}
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    blockList: {
      type: new GraphQLList(Block),
      args: {limit: {type: GraphQLInt}},
      resolve(parentValue, args) {
        return eosService.getBlockList(args.limit)
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

