import React, { Component } from 'react';

import bomb from '../assets/bomb.png';
import './styles.css';

export default class BombCell extends Component {
  render() {
    return (
      <div className='bomb-cell'>
        {bomb}
      </div>
    );
  }
}
