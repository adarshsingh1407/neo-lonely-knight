import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import Square from './Square';
import Knight from './Knight';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {};
    // INIT GAME USING this => props.initGame();
  }
  moveKnight(newKnightPosition) {
    console.log(newKnightPosition);
    this.props.moveKnight(newKnightPosition);
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  renderSquare(i) {
    const {gameState} = this.props;
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const pos = {x: x, y: y}
    const {x: knightX, y: knightY} = gameState.knightPosition;
    const piece = (x === knightX && y === knightY) ?
      <Knight show={true} pos={pos} /> :
      <Knight show={false} pos={pos} />;

    return (<Square
      key={x + ' ' + y}
      pos={pos}
      moveKnight={this.moveKnight.bind(this)}
            >
      {piece}
    </Square>);
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div className="chessboard">
        {squares}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
