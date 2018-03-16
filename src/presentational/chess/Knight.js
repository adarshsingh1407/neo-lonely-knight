import React, { Component } from 'react';
import classNames from 'classnames'
import {DragSource} from 'react-dnd'
import {ItemTypes} from 'dnd/chess/chessPieceTypes'

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
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

const knightSrc = 'https://d30y9cdsu7xlg0.cloudfront.net/png/589743-200.png';

class Knight extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
    // console.log(props);
  }
  componentDidMount() {
    const img = new Image();
    img.src = knightSrc;
    img.onload = () => {
      this.props.connectDragPreview(img);
    };
  }
  render() {
    const { connectDragSource, isDragging, show } = this.props;
    return connectDragSource(
      <div className={classNames({
        'dnd-is-dragging': isDragging
      })}>
        <div>{show ? <span>&#9822;</span> : ''}</div>
      </div>,
      {dropEffect: 'copy'}
    )
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
