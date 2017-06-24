import React, { Component } from 'react';

import bomb from '../assets/bomb.png';
import './styles.css';

export default class BombCell extends Component {
  render() {
    let css = this.props.bombState === 'explosion'
      ? 'exploded-cell' : 'bomb-cell';
    return (
      <div className={css}>
        <img src={bomb} className='cell-img' alt="bomb" />
      </div>
    );
  }
}
