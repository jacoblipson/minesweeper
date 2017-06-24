import React, { Component } from 'react';

import './styles.css';

export default class BlankCell extends Component {
  render() {
    return (
      <div
        className='cell'
        onClick={() => this.props.click(this.props.x, this.props.y)}
      />
    );
  }
}
