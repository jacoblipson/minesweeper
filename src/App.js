import React, { Component } from 'react';
import './App.css';

import TitlePage from './TitlePage';
import Board from './Board';

const difficulties = {
  easy: {
    width: 9,
    height: 9,
    mines: 10,
  }
}

class App extends Component {

  state = {
    started: false,
    difficulty: 'easy', //implement different difficulties later
  }

  start = () => {
    this.setState({ started: true })
    let board = this.buildBoard(difficulties[this.state.difficulty])
    this.setState({ board })
  }

  /*
  selectDifficulty = difficulty => {
    this.setState({ difficulty })
  }*/

  buildBoard = settings => {
    let board = []
    for (let i = 0; i < settings.width; i++) {
      let col = []
      for (let j = 0; j < settings.height; j++) {
        col[j] = {
          revealed: false,
          marked: false,
          bomb: null,
          neighbors: 0
        }
      }
      board[i] = col;
    }
    board = this.addMines(board, settings)
    return board;
  }

  addMines = (board, settings) => {
    let width = settings.width
    let height = settings.height
    let addedMines = 0;
    while (addedMines < settings.mines) {
      let x = Math.floor((Math.random() * width));
      let y = Math.floor((Math.random() * height));
      while (board[x][y].bomb) {
        x = Math.floor((Math.random() * width));
        y = Math.floor((Math.random() * height));
      }
      board[x][y].bomb = 'active';
      addedMines++;
      board = this.updateNeighbors(board, x, y, width, height)
    }
    return board;
  }

  updateNeighbors = (board, x, y, width, height) => {
    // find the neighbors of the cell (within the bounds of the board)
    for (let i = -1; i < 2 && -1 < x+i && x+i < width; i++) {
      for (let j= -1; j < 2 && -1 < y+j && y+j < height; j++) {
        // do not update the position of the bomb aka (x+0, y+0) aka (x, y)
        if (i !== 0 || j !== 0) {
          board[x+i][y+j].neighbors++;
        }
      }
    }
    return board;
  }

  render() {
    return (
      <div className="App">
        {!this.state.started && <TitlePage start={this.start} /> }
        {/*!this.state.started &&
          <selectDifficulty select={this.selectDifficulty }/>*/}
        {this.state.started && <Board board={this.state.board} />}
      </div>
    );
  }
}

export default App;
