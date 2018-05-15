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

const Labels = () => {
  const headers = ['Height', 'Hash', 'Timestamp', 'Actions'];
  return (
    <thead>
      <tr>
        {headers.map(header => (<th>{header}</th>))}
      </tr>
    </thead>
  );
};

const Blocks = () => (
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
        <div className="container list-container">
        <div className="load-button">
          <button onClick={() => refetch()}>Load</button>
        </div>
        <div className="table-responsive-vertical card">
          <table id="table" className="table table-hover table-mc-light-blue">
            {Labels()}
            <tbody>
              {blocks}
            </tbody>
          </table>
        </div>
        </div>
      );
    }}
  </Query>
);

class BlockList extends Component {

  render() {
    return (
      <div>
        {Blocks()}
      </div>
    );
  }
}

export default BlockList;