import React, { Component } from 'react';
import classNames from 'classnames'
import {DragSource} from 'react-dnd'
import {ItemTypes} from 'dnd/itemTypes'

const knightSource = {
  beginDrag: (props) => {
    return {
      originalPos: props.pos
    }
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
    // console.log(props);
  }
  render() {
    const { connectDragSource, isDragging, show } = this.props;
    return connectDragSource(<div className={classNames({
      'dnd-is-dragging': isDragging
    })}>{show ? <span>&#9822;</span> : ''}</div>)
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
