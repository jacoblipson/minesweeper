import React, { Component } from 'react';

export default class Status extends Component {
  render() {
    let modeText = this.props.mode === 'click' ? 'Switch to flag mode' :
      'Switch to click mode';
    let resetText = this.props.gameState === 2 ? 'You won! Play again?' : 'Reset'
    return (
      <div className="status">
          <div className='difficulty'>Difficulty: {this.props.difficulty}</div>
          <div className='counter'>Mines remaining: {this.props.bombCounter}</div>
          <button onClick={this.props.toggleMode}>{modeText}</button>
          <button onClick={this.props.resetGame}>{resetText}</button>
      </div>
      )
  }
}
