import React, {Component} from 'react';
import {DragSource, DropTarget} from 'react-dnd'
import { findDOMNode } from 'react-dom'
import {ItemTypes} from 'dnd/kanban/itemTypes'
import classNames from 'classnames'

const canReceiveCardAtIndex = (hoveredItem, draggedItem) => {
  var {card: hoveredCard, list: hoveredList, cardIndex} = hoveredItem;
  var {card: draggedCard, list: draggedList} = draggedItem;
  if (draggedItem.list.listId === hoveredList.listId && draggedItem.card.cardId === hoveredCard.cardId) {
    return -1;
  }
  return cardIndex;
}

// START: DropTarget
const cardTarget = {
  drop: (props, monitor) => {
    console.log('Dropped At: ', props, ' Item: ', monitor.getItem());
  },
  canDrop: (props, monitor) => {
    return canReceiveCardAtIndex(props, monitor.getItem()) > -1;
  },
  hover: (props, monitor, component) => {
    var hoveredItem = props;
    var draggedItem = monitor.getItem();
    var receiveCardAtIndex = canReceiveCardAtIndex(hoveredItem, draggedItem);

    var {listIndex: currentListIndex, cardIndex: currentCardIndex} = props;

    if (props.hoveredOn) {
      var {listIndex: hoveredListIndex, cardIndex: hoveredCardIndex} = props.hoveredOn;
      if (hoveredListIndex === currentListIndex && hoveredCardIndex === currentCardIndex) {
        return false;
      }
    }

    if (receiveCardAtIndex > -1) {
      props.processHoveredOn(props.listIndex, props.cardIndex)
    }
  }
}

const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    draggedItem: monitor.getItem()
  };
}
// END: DropTarget

// START: DragSource
const cardSource = {
  beginDrag: (props) => {
    return {
      list: props.list,
      card: props.card,
      cardIndex: props.cardIndex,
      listIndex: props.listIndex
    }
  },
  endDrag: (props, monitor, component) => {
    console.log('didDrop', monitor.didDrop());
  }
}

const dragCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}
// END: DragSource

class KanbanCard extends Component {
  render(){
    const {card, connectDragSource, isDragging, connectDropTarget, isOver, canDrop, draggedItem} = this.props;
    return connectDropTarget(connectDragSource(
      <div className={classNames({
        'kanban-card': true,
        'kanban-card-is-dragging': isDragging,
        'kanban-card-is-over-allowed': isOver && canDrop,
        'kanban-card-is-over-not-allowed': isOver && !canDrop
      })}>
        {card.cardTitle}
      </div>
    ));
  }
}

const KanbanCardDragSource = DragSource(ItemTypes.CARD, cardSource, dragCollect)(KanbanCard);

const KanbanCardDropTarget = DropTarget(ItemTypes.CARD, cardTarget, dropCollect)(KanbanCardDragSource)

export default KanbanCardDropTarget
