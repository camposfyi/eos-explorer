import React, {Component} from 'react';

class BlockListItem extends Component {
  render() {
    return (
      <tr>
        <td data-title="Height">{this.props.block.block_num}</td>
        <td data-title="Hash">{this.props.block.id}</td>
        <td data-title="Timestamp">{this.props.block.timestamp}</td>
        <td data-title="Actions">{this.props.block.input_transactions.length}</td>
      </tr>
    );
  }
}

export default BlockListItem;