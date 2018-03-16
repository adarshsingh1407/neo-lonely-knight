import React, {Component} from 'react';
import {
  Row, Col
} from 'react-bootstrap'
import KanbanCard from 'presentational/kanban/KanbanCard'

class KanbanBoard extends Component {
  render(){
    const {kanbanState} = this.props;
    const kanbanList = kanbanState;
    return(
      <div>
        <Row>
          {kanbanList && kanbanList.length > 0 && kanbanList.map((list) => {
            const cards = list.cards;
            return (<Col key={list.listId} md={2} className="kanban-list">
              <div className="kanban-list-title">{list.listTitle}</div>
              {cards && cards.length > 0 && cards.map((card) => {
                return (<div key={card.cardId}>
                  <KanbanCard card={card} list={list} />
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
