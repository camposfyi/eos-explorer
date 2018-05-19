import React, {Component} from 'react';
import BlockItem from '../BlockItem/BlockItem';
import './BlockList.css';

const renderHeaders = (headers) => {
  return (
    <div className="list-row list-header">
      {headers.map(header => (
        <div className="list-cell">{header}</div>
      ))}
    </div>
  );
};

const renderRows = (blocks) => {
  return blocks.map(block => <BlockItem block={block} />);
};

class BlockList extends Component {
  render() {
    return (
      <div className="block-list">
        {renderHeaders(this.props.headers)}
        {renderRows(this.props.blocks)}
      </div>
    );
  }
}

export default BlockList;