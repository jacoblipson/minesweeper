import React, { Component } from 'react';

import './styles.css';

export default class SettingsPage extends Component {
  render() {
    return (
      <div className="settings">
        <div className="settings-header">
          <h2>Pick a Difficulty</h2>
        </div>
        <div>
          <button
            className='settings-button'
            onClick={() => this.props.selectDifficulty('Easy')}
          >
              <p>Easy</p>
              <p>9x9</p>
              <p>10 mines</p>
          </button>
          <button
            className='settings-button'
            onClick={() => this.props.selectDifficulty('Medium')}
          >
            <p>Medium</p>
            <p>16x16</p>
            <p>40 mines</p>
          </button>
          <button
            className='settings-button'
            onClick={() => this.props.selectDifficulty('Hard')}
          >
            <p>Hard</p>
            <p>16x30</p>
            <p>99 mines</p>
          </button>
        </div>
      </div>
    );
  }
}
