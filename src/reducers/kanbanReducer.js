import {
  CREATE_LIST,
  CREATE_CARD,
  MOVE_LIST,
  MOVE_CARD
} from 'actions/kanbanActions.js'

const DEFAULT_KANBAN_STATE = [{
  listId: 'l1',
  listTitle: 'List 1',
  cards: [{
    cardId: 'c11',
    cardTitle: 'Card 11'
  }, {
    cardId: 'c12',
    cardTitle: 'Card 12'
  }, {
    cardId: 'c13',
    cardTitle: 'Card 13'
  }, {
    cardId: 'c14',
    cardTitle: 'Card 14'
  }]
}, {
  listId: 'l2',
  listTitle: 'List 2',
  cards: [{
    cardId: 'c21',
    cardTitle: 'Card 21'
  }, {
    cardId: 'c22',
    cardTitle: 'Card 22'
  }, {
    cardId: 'c23',
    cardTitle: 'Card 23'
  }, {
    cardId: 'c24',
    cardTitle: 'Card 24'
  }]
}];

const kanbanReducer = (state = DEFAULT_KANBAN_STATE, action) => {
  var payload = action.payload;
  switch (action.type) {
    case CREATE_LIST:
      return state;
    case CREATE_CARD:
      return state;
    case MOVE_LIST:
      return state;
    case MOVE_CARD:
      return state;
    default:
      return state;
  }
}

export default kanbanReducer
