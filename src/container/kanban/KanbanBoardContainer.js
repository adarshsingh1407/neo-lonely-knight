import {connect} from 'react-redux';
import {
  createList,
  createCard,
  moveList,
  moveCard,
  addPlaceholderCard,
  processHoveredOn
} from 'actions/kanbanActions'
import KanbanBoard from 'presentational/kanban/KanbanBoard'

const mapDispatchToProps = dispatch => {
  return {
    createList: (list) => dispatch(createList(list)),
    createCard: (card, listId) => dispatch(createCard(card, listId)),
    moveList: (listId, targetPos) => dispatch(moveList(listId, targetPos)),
    moveCard: (cardId, targetPos) => dispatch(moveCard(cardId, targetPos)),
    addPlaceholderCard: (listIndex, cardIndex) => dispatch(addPlaceholderCard(listIndex, cardIndex)),
    processHoveredOn: (listIndex, cardIndex) => dispatch(processHoveredOn(listIndex, cardIndex))
  };
};

const mapStateToProps = state => {
  return {
    kanbanState: state.kanbanState
  };
};

const KanbanBoardContainer = connect(mapStateToProps, mapDispatchToProps)(KanbanBoard)

export default KanbanBoardContainer
