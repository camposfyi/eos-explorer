import React, {Component} from 'react';

class BlockListItem extends Component {
  render() {
    return (
      <div className="list-row">
        <div className="list-cell" data-title="Height">{this.props.block.block_num}</div>
        <div className="list-cell" data-title="Hash">{this.props.block.id}</div>
        <div className="list-cell" data-title="Timestamp">{this.props.block.timestamp}</div>
        <div className="list-cell" data-title="Actions">{this.props.block.input_transactions.length}</div>
      </div>
    );
  }
}

export default BlockListItem;