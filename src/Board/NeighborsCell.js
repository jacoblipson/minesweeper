import React, { Component } from 'react';

import './styles.css';

export default class NeighborsCell extends Component {
  /* TODO: Add different font colors to different neighbor values */
  render() {
    return (
      <div className='neighbors-cell'>
        {this.props.count === 0 ? '' : this.props.count}
      </div>
    );
  }
}
