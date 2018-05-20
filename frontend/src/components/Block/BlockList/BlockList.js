import React, {Component} from 'react';
import BlockItem from '../BlockItem/BlockItem';
import './BlockList.css';

class BlockList extends Component {

  renderHeaders() {
    return (
      <div className="list-row list-header">
        {this.props.headers.map(header => (
          <div className="list-cell" key={header}>{header}</div>
        ))}
      </div>
    );
  };

  renderEmptyMessage() {
    return (
      <div className="no-blocks">There aren't any blocks available.</div>
    );
  };

  renderRows() {
    const blocks = this.props.blocks;

    if (!blocks || blocks.length === 0) {
      return this.renderEmptyMessage();
    }

    return blocks.map(block => <BlockItem key={block.block_num} block={block} />);
  };

  render() {
    return (
      <div className="block-list">
        {this.renderHeaders(this.props.headers)}
        {this.renderRows(this.props.blocks)}
      </div>
    );
  }
}

export default BlockList;