import React, {Component} from 'react';
import {
  Row, Col
} from 'react-bootstrap'
import KanbanCard from 'presentational/kanban/KanbanCard'

class KanbanBoard extends Component {
  render(){
    const {kanbanState, addPlaceholderCard, processHoveredOn} = this.props;
    const kanbanList = kanbanState.board;
    const hoveredOn = kanbanState.hoveredOn;
    return(
      <div>
        <Row>
          {kanbanList && kanbanList.length > 0 && kanbanList.map((list, listIndex) => {
            const cards = list.cards;
            return (<Col key={list.listId} md={2} className="kanban-list">
              <div className="kanban-list-title">{list.listTitle}</div>
              {cards && cards.length > 0 && cards.map((card, cardIndex) => {
                return (<div key={card.cardId}>
                  <KanbanCard
                    hoveredOn={hoveredOn}
                    processHoveredOn={processHoveredOn}
                    listIndex={listIndex}
                    cardIndex={cardIndex}
                    card={card}
                    list={list}
                    addPlaceholderCard={addPlaceholderCard}
                  />
                </div>)
              })}
            </Col>)
          })}
        </Row>
      </div>
    );
  }
}

export default KanbanBoard;
