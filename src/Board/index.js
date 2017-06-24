import React, { Component } from 'react';

import Row from './Row';

export default class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="cells">
          {this.props.board && this.props.board.map((row, index) =>
            <Row key={index} row={row} />)}
        </div>
      </div>
    );
  }
}
