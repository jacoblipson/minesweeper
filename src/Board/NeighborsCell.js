import React, { Component } from 'react';

import './styles.css';

export default class NeighborsCell extends Component {
  render() {
    return (
      <div className='neighbors-cell'>
        {this.props.count}
      </div>
    );
  }
}
