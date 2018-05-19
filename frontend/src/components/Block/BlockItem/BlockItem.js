import React, {Component} from 'react';
import BlockContents from "../BlockContents/BlockContents";

class BlockItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rawBlockVisible: false
    };
  }

  toggleRawContents() {
    this.setState({
      rawBlockVisible: !this.state.rawBlockVisible
    });
  }

  render() {
    return (
      <div>
        <div className="list-row" onClick={this.toggleRawContents.bind(this)}>
          <div className="list-cell" data-title="Height">{this.props.block.block_num}</div>
          <div className="list-cell" data-title="Hash">{this.props.block.id}</div>
          <div className="list-cell" data-title="Timestamp">{this.props.block.timestamp}</div>
          <div className="list-cell" data-title="Actions">{this.props.block.input_transactions.length}</div>
        </div>
        <div>{this.state.rawBlockVisible && <BlockContents blockNumber={this.props.block.block_num}/>}</div>
      </div>
    );
  }
}

export default BlockItem;