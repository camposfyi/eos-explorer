import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from "react-apollo";
import BlockList from '../Block/BlockList/BlockList';
import Spinner from '../Spinner/Spinner';
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

const renderSpinner = () => {
  return (
    <div className='loading-blocks'>
      <Spinner size={50} text='Fetching blocks' />
    </div>
  );
};

const renderError = (error) => {
  return `Error! ${error.message}`;
};

const renderBlocks = (blocks, refetch) => {
  const headers = ['Height', 'Hash', 'Timestamp', 'Actions'];
  return (
    <div>
      <div className="load-button-container">
        <button onClick={() => refetch()}>Load</button>
      </div>
      <BlockList headers={headers} blocks={blocks}/>
    </div>
  );
};

const renderHomePageContents = () => (
  <Query query={GET_BLOCKS}>
    {({loading, error, data, refetch}) => {
      if (loading) {
        return renderSpinner();
      } else if (error) {
        return renderError(error);
      } else {
        return renderBlocks(data.blocks, refetch);
      }
    }}
  </Query>
);

class HomePage extends Component {
  render() {
    return (
      <div className="container home-page">
        {renderHomePageContents()}
      </div>
    );
  }
}

export default HomePage;