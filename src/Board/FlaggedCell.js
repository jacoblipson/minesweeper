import React, { Component } from 'react';

import flag from '../assets/flag.ico';
import './styles.css';

export default class FlaggedCell extends Component {
  render() {
    return (
      <div className='cell'>
        <img src={flag} className='cell-img' alt='flag' />
      </div>
    );
  }
}
