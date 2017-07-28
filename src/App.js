import React, { Component } from 'react';
import './App.css';

import SettingsPage from './SettingsPage';
import TitlePage from './TitlePage';
import Board from './Board';

const difficulties = {
  Easy: {
    width: 9,
    height: 9,
    mines: 10,
  },
  Medium: {
    width: 16,
    height: 16,
    mines: 40,
  },
  Hard: {
    width: 16,
    height: 30,
    mines: 99,
  },
}

const gameStates = {
  UNSTARTED: 0,
  ACTIVE: 1,
  WON: 2,
  LOST: 3,
}

const initState = {
  difficulty: '',
  flaggedBombs: 0,
  flagsPlanted: 0,
  gameOver: false,
  mode: 'click',
}


class App extends Component {

  state = {
    gameState: gameStates.UNSTARTED,
    ...initState,
  }

  start = () => {
    this.setState({
      gameState: gameStates.ACTIVE,
      ...initState,
    })
  }


  selectDifficulty = difficulty => {
    this.setState({ difficulty })
    let board = this.buildBoard(difficulties[difficulty])
    this.setState({ board })
  }

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
    for (let i = -1; i < 2; i++) {
      if (x+i < 0 || x+i >= width) continue;
      for (let j= -1; j < 2; j++) {
        if (y+j < 0 || y+j >= height) continue;
        // do not update the position of the bomb aka (x+0, y+0) aka (x, y)
        if (i !== 0 || j !== 0) {
          board[x+i][y+j].neighbors++;
        }
      }
    }
    return board;
  }

  toggleMode = () => {
    if (this.state.mode === 'flag') {
      this.setState({ mode: 'click' })
    } else {
      this.setState({ mode: 'flag' })
    }
  }

  clickCell = (x, y) => {
    if (this.state.gameState !== gameStates.ACTIVE) return;
    let board = this.state.board;
    if (this.state.mode === 'flag') {
      this.flagCell(board, x, y)
    } else if (this.state.board[x][y].bomb) {
      board[x][y].bomb = 'explosion';
      this.setState({ board, gameState: gameStates.LOST })
      this.revealBombs(board);
    } else {
      board = this.revealCell(board, x, y);
      this.setState({ board })
    }
  }

  flagCell = (board, x, y) => {
    // mark the cell accordingly & adjust display/win counters
    if (board[x][y].marked) {
      board[x][y].marked = false;
      this.setState({
        board,
        flagsPlanted: this.state.flagsPlanted - 1,
        flaggedBombs: this.state.flaggedBombs - board[x][y].bomb ? 1 : 0,
      })
    } else {
      board[x][y].marked = true;
      let flaggedBombs = this.state.flaggedBombs + (board[x][y].bomb ? 1 : 0)
      this.setState({
        board,
        flagsPlanted: this.state.flagsPlanted + 1,
        flaggedBombs: flaggedBombs,
        gameState: flaggedBombs === difficulties[this.state.difficulty].mines
          ? gameStates.WON : gameStates.ACTIVE,
      })
    }
  }

  revealCell = (board, x, y) => {
    board[x][y].revealed = true;
    if (board[x][y].marked) {
      this.setState({ flagsPlanted: this.state.flagsPlanted - 1 })
    }
    // if we have no neighbors with bombs, mark all those cells as revealed
    if (board[x][y].neighbors === 0) {
      for (let i = -1; i < 2; i++) {
        if (x+i < 0 || x+i >= board.length) continue;
        for (let j= -1; j < 2; j++) {
          if (y+j < 0 || y+j >= board[x].length) continue;
          if (board[x+i][y+j].revealed) continue;
          // recurse s.t. adjacent cells with 0 bomb neighbors are also revealed
          this.revealCell(board, x+i, y+j);
        }
      }
    }
    return board;
  }

  revealBombs = board => {
    // now that our game is over, if there is a bomb, let's see it
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j].bomb) {
          board[i][j].revealed = true;
        }
      }
    }
    this.setState({ board })
  }

  render() {
    return (
      <div className="App">
        {this.state.gameState === gameStates.UNSTARTED &&
          <TitlePage start={this.start} /> }
        {!this.state.difficulty &&
          <SettingsPage selectDifficulty={this.selectDifficulty} />}
        {this.state.difficulty &&
          <Board
            totalMines={difficulties[this.state.difficulty].mines}
            flagsPlanted={this.state.flagsPlanted}
            gameState={this.state.gameState}
            difficulty={this.state.difficulty}
            board={this.state.board}
            mode={this.state.mode}
            resetGame={this.start}
            toggleMode={this.toggleMode}
            click={this.clickCell}
          />
        }
      </div>
    );
  }
}

export default App;
