import React, { Component } from 'react';
import Knight from './Knight';
import BoardSquare from 'container/chess/BoardSquare'

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {};
    // INIT GAME USING this => props.initGame();
  }
  moveKnight(newKnightPosition) {
    this.props.moveKnight(newKnightPosition);
  }
  renderSquare(i) {
    const {gameState} = this.props;
    const x = i % 8;
    const y = Math.floor(i / 8);
    const pos = {x: x, y: y}
    const {x: knightX, y: knightY} = gameState.knightPosition;
    const black = (pos.x + pos.y) % 2 === 1;
    const piece = (
      <div>
        <Knight show={(x === knightX && y === knightY)} pos={pos} />
      </div>
    );

    return (<div key={x + ' ' + y} onClick={() => this.moveKnight(pos)}>
      <BoardSquare
        moveKnight={this.moveKnight.bind(this)}
        pos={pos}
        black={black}
      >
        {piece}
      </BoardSquare>
    </div>);
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

export default Board;
