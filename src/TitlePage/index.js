import React, { Component } from 'react';

import bomb from '../assets/bomb.png';
import './styles.css';

export default class TitlePage extends Component {
  render() {
    return (
      <div className="title">
        <div className="title-header">
          <img src={bomb} className="title-logo" alt="logo" />
          <h2>Welcome to Minesweeper!</h2>
        </div>
        <button onClick={this.props.start}>{"Let's get started!"}</button>
      </div>
    );
  }
}
