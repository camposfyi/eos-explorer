import React, {Component} from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Spinner from "../../Spinner/Spinner";
import './BlockContents.css';

const getQuery = (blockNumber) => {
  return gql`{
    block(blockNumber: ${blockNumber}) {
      previous, timestamp, transaction_mroot, action_mroot, block_mroot, producer, schedule_version, new_producers, producer_signature, regions {
        region, cycles_summary {
          read_locks, write_locks, transactions {
            id, status, kcpu_usage, net_usage_words
          }
        }
      }, input_transactions, id, block_num, ref_block_prefix
    }
  }`
};

const renderBlockContents = (blockNumber) => (
  <Query query={getQuery(blockNumber)}>
    {({loading, error, data}) => {
      if (loading) {
        return <Spinner/>
      }

      if (error) {
        return `Error! ${error.message}`;
      }

      if(data) {
        return (
          <div className="block-contents">
            <pre>{JSON.stringify(data.block, null, 2)}</pre>
          </div>
        );
      }
    }}
  </Query>
);

class BlockContents extends Component {
  render() {
    return (
      <div>
        {renderBlockContents(this.props.blockNumber)}
      </div>
    );
  }
}

export default BlockContents;