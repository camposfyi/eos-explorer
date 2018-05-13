import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class BlockList extends Component {
  renderBlocks() {
    if(this.props.data.loading) {
      return <div>Loading...</div>
    }

    console.log('props', this.props);

    return this.props.data.blockList.map(block => {
      return (
        <li>{block.id}</li>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderBlocks()}
      </div>
    );
  }
}

const query = gql`
{
  blockList(limit:10) {
    id, block_num, producer
  }
}
`;

export default graphql(query)(BlockList);