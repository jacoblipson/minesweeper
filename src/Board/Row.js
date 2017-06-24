import React, { Component } from 'react';

import BombCell from './BombCell';
import NeighborsCell from './NeighborsCell';
import FlaggedCell from './FlaggedCell';
import BlankCell from './BlankCell';


export default class Row extends Component {
  render() {
    return (
        <div className="row">
          {this.props.row.map((cell, index) =>
            <div key={index}>
              {(cell.revealed && cell.bomb) &&
                <BombCell
                  x={this.props.x} y={index}
                  bombState={cell.bomb}
                />
              }
              {(cell.revealed && !cell.bomb) &&
                <NeighborsCell
                  x={this.props.x} y={index}
                  count={cell.neighbors}
                />
              }
              {(!cell.revealed && cell.marked) &&
                <FlaggedCell
                  x={this.props.x} y={index}
                  click={this.props.click}
                />
              }
              {(!cell.revealed && !cell.marked) &&
                <BlankCell
                  x={this.props.x} y={index}
                  click={this.props.click}
                />
              }
            </div>
          )}
        </div>
    );
  }
}
