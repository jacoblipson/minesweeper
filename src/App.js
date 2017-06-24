import React, { Component } from 'react';
import './App.css';

import TitlePage from './TitlePage';
import Board from './Board';

class App extends Component {

  state = {
    started: false,
    difficulty: 'easy', //
  }

  start = () => {
    this.setState({ started: true })
  }

  /*
  selectDifficulty = difficulty => {
    this.setState({ difficulty })
  }*/

  render() {
    return (
      <div className="App">
        {!this.state.started && <TitlePage start={this.start} /> }
        {/*!this.state.started &&
          <selectDifficulty select={this.selectDifficulty }/>*/}
        {!this.state.started && <Board />}
      </div>
    );
  }
}

export default App;
