import React, { Component } from 'react';

import Status from './Status';
import Row from './Row';

export default class Board extends Component {
  render() {
    let bombCounter = this.props.totalMines - this.props.flagsPlanted;
    return (
      <div className="board">
        <Status
          gameState={this.props.gameState}
          mode={this.props.mode}
          bombCounter={bombCounter}
          difficulty={this.props.difficulty}
          resetGame={this.props.resetGame}
          toggleMode={this.props.toggleMode}
        />
        <div className="cells">
          {this.props.board && this.props.board.map((row, index) =>
            <Row
              key={index}
              x={index}
              row={row}
              click={this.props.click}
            />)}
        </div>
      </div>
    );
  }
}
