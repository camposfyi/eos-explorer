import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import BlocListItem from './BlockItem/BlockItem';
import Spinner from '../Spinner/Spinner';
import './BlockList.css';

const GET_BLOCKS = gql`
{
  blockList(limit:10) {
    id, 
    block_num, 
    timestamp, 
    input_transactions
  }
}
`;

const renderTableHeaders = () => {
  const headers = ['Height', 'Hash', 'Timestamp', 'Actions'];
  return (
    <div className="list-row list-header">
      {headers.map(header => (
        <div className="list-cell">{header}</div>
      ))}
    </div>
  );
};

const renderBlocks = (blocks) => {
  return (
    <div className="block-list-container">
      <div className="block-list-wrapper">
        <div className="block-list">
          {renderTableHeaders()}
        </div>

          {blocks}
      </div>
    </div>
  );
};

const renderBlockList = () => (
  <Query query={GET_BLOCKS}>
    {({ loading, error, data, refetch }) => {
      if (loading) {
        return <Spinner/>
      }
      if (error) {
        return `Error! ${error.message}`;
      }

      const blocks = data.blockList.map(block => <BlocListItem block={block} />);

      return (
        <div className="container blocks-container">
          <div className="load-button-container">
            <button onClick={() => refetch()}>Load</button>
          </div>
          {renderBlocks(blocks)}
        </div>
      );
    }}
  </Query>
);

class BlockList extends Component {

  render() {
    return (
      <div>
        {renderBlockList()}
      </div>
    );
  }
}

export default BlockList;