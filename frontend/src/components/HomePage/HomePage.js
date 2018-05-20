import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from "react-apollo";
import BlockList from '../Block/BlockList/BlockList';
import Error from '../Error/Error';
import './HomePage.css';

const GET_BLOCKS = gql`
{
  blocks(limit:10) {
    id, 
    block_num, 
    timestamp, 
    input_transactions
  }
}
`;

class HomePage extends Component {

  renderError(error) {
    return <Error title='Unable to fetch blocks' message={error.message}/>
  };

  renderSpinner() {
    return (
      <div className='loading-blocks'>
        <i className="fa fa-spinner fa-spin"/>
        <p>Loading...</p>
      </div>
    );
  }

  renderLoadButton(refetch) {
    return (
      <div className="load-button-container">
        <button onClick={() => refetch()}>Load</button>
      </div>
    );
  }

  renderBlockList(blocks) {
    const headers = ['Height', 'Hash', 'Timestamp', 'Actions'];
    return (
      <div>
        <BlockList headers={headers} blocks={blocks}/>
      </div>
    );
  };

  renderContents() {
    return (
      <Query query={GET_BLOCKS}>
        {({loading, error, data, refetch}) => {
          if (loading) {
            return this.renderSpinner();
          } else if (error) {
            return this.renderError(error);
          }
          return (
            <div>
              {this.renderLoadButton(refetch)}
              {this.renderBlockList(data.blocks)}
            </div>
          );
        }}
      </Query>
    )
  };

  render() {
    return (
      <div className="container home-page">
        {this.renderContents()}
      </div>
    );
  }
}

export default HomePage;