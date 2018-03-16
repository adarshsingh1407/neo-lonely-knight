import React, {Component} from 'react';
import {DragSource} from 'react-dnd'
import {ItemTypes} from 'dnd/kanban/itemTypes'

const cardSource = {
  beginDrag: (props) => {
    return {
      list: props.list,
      card: props.card
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

class KanbanCard extends Component {
  render(){
    const {card, connectDragSource, isDragging} = this.props;
    return connectDragSource(
      <div className="kanban-card">
        {card.cardTitle}
      </div>
    );
  }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(KanbanCard)
