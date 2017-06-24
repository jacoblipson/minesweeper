import React, { Component } from 'react';

import BombCell from './BombCell';
import NeighborsCell from './NeighborsCell';
import FlaggedCell from './FlaggedCell';
import BlankCell from './BlankCell';


export default class Row extends Component {
  render() {
    return (
        <div className="row">
          {this.props.row.map(cell =>
            <div>
              {(cell.revealed && cell.bomb) && <BombCell />}
              {(cell.revealed && !cell.bomb) &&
                <NeighborsCell count={cell.neighbors} />}
              {(!cell.revealed && cell.marked) && <FlaggedCell />}
              {(!cell.revealed && !cell.marked) && <BlankCell />}
            </div>
          )}
        </div>
    );
  }
}
