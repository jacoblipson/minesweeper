import React, { Component } from 'react';

const difficulties = {
  'easy': {
    length: 9,
    width: 9,
    mines: 10,
  }
}


export default class Board extends Component {

  render() {
    return (
      <div className="board">
        <div>This is the board</div>
      </div>
    );
  }
}
