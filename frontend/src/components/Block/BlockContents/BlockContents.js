import React, {Component} from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from '../../Error/Error';
import './BlockContents.css';

class BlockContents extends Component {

  getQuery (blockNumber) {
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

  renderSpinner() {
    return (
      <div className="loading-block">
        <i className="fa fa-spinner fa-spin"/>
        <p>Fetching block contents</p>
      </div>
    );
  };

  renderError(error) {
    return <Error title='Unable to fetch block' message={error.message} />
  };

  renderRawJson(block) {
    return (
      <div className="block-contents">
        <pre>{JSON.stringify(block, null, 2)}</pre>
      </div>
    );
  };

  renderBlock(blockNumber) {
    return (
      <Query query={this.getQuery(blockNumber)}>
        {({loading, error, data}) => {
          if (loading) {
            return this.renderSpinner();
          } else if (error) {
            return this.renderError(error);
          } else if(data) {
            return this.renderRawJson(data.block);
          }
        }}
      </Query>
    );
  };

  render() {
    return (
      <div>
        {this.renderBlock(this.props.blockNumber)}
      </div>
    );
  }
}

export default BlockContents;