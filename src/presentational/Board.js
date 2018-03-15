import React, { Component } from 'react';
import Knight from './Knight';
import BoardSquare from 'container/BoardSquare'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Board extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {};
    // INIT GAME USING this => props.initGame();
  }
  moveKnight(newKnightPosition) {
    console.log('moveKnight', newKnightPosition);
    this.props.moveKnight(newKnightPosition);
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
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

export default DragDropContext(HTML5Backend)(Board);
