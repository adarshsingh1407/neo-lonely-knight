import React, { Component } from 'react';
import Square from 'presentational/Square';
import {ItemTypes} from 'dnd/itemTypes'
import { DropTarget } from 'react-dnd';
import {canMoveKnight} from 'utils/chessUtil'

const squareTarget = {
  drop: (props, monitor) => {
    props.moveKnight(props.pos);
  },
  canDrop: (props, monitor) => {
    var draggedItem = monitor.getItem();
    var oldPos = draggedItem.originalPos;
    var newPos = props.pos;
    return canMoveKnight(oldPos, newPos)
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    draggedItem: monitor.getItem()
  };
}

const getSquareBgColor = (black, isOver, draggedItem, pos) => {
  var bg = '';
  if (isOver) {
    bg = 'dnd-is-over ';
    var isLegalMove = canMoveKnight(draggedItem.originalPos, pos);
    bg += isLegalMove ? 'dnd-is-over-allowed' : 'dnd-is-over-not-allowed'
  } else if (!black) {
    bg = 'white'
  } else {
    bg = 'black';
  }
  return bg;
}

class BoardSquare extends Component {
  moveKnight(newKnightPosition) {
    // console.log('moveKnight', newKnightPosition);
    this.props.moveKnight(newKnightPosition);
  }
  render() {
    const { draggedItem, pos, connectDropTarget, isOver, black } = this.props;
    // console.log(this.props.pos);
    return connectDropTarget(
      <div className={getSquareBgColor(black, isOver, draggedItem, pos)}>
        <Square
          isOver={isOver}
        >
          {this.props.children}
        </Square>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);