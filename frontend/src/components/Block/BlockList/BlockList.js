import React, {Component} from 'react';
import BlockItem from '../BlockItem/BlockItem';
import './BlockList.css';

const renderHeaders = (headers) => {
  return (
    <div className="list-row list-header">
      {headers.map(header => (
        <div className="list-cell" key={header}>{header}</div>
      ))}
    </div>
  );
};

const renderEmptyMessage = () => {
  return (
    <div className="no-blocks">There aren't any blocks available.</div>
  );
};

const renderRows = (blocks) => {
  if (!blocks || blocks.length === 0) {
    return renderEmptyMessage();
  }

  return blocks.map(block => <BlockItem key={block.block_num} block={block} />);
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