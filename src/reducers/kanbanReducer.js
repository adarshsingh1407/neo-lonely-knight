import {
  CREATE_LIST,
  CREATE_CARD,
  MOVE_LIST,
  MOVE_CARD,
  ADD_PLACEHOLDER_CARD,
  HOVERED_ON
} from 'actions/kanbanActions.js'

const getDummyCard = (cards, listIndex, cardIndex) => {
  var newCardId = 'dummy' + listIndex + cardIndex;
  var alreadyExistsAtIndex = cards.findIndex((card) => card.cardId === newCardId)
  if (alreadyExistsAtIndex > -1) {
    return undefined;
  } else {
    return {
      cardId: newCardId,
      isDummy: true,
      cardTitle: 'Place here'
    };
  }
}

const DEFAULT_KANBAN_STATE = {
  hoveredOn: undefined,
  board: [{
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
  }]
};

const kanbanReducer = (state = DEFAULT_KANBAN_STATE, action) => {
  var payload = action.payload;
  var newState = {...state};
  switch (action.type) {
    case CREATE_LIST:
      return newState;
    case CREATE_CARD:
      return newState;
    case MOVE_LIST:
      return newState;
    case MOVE_CARD:
      return newState;
    case HOVERED_ON:
      newState.hoveredOn = payload;
      return newState;
    case ADD_PLACEHOLDER_CARD:
      var {listIndex, cardIndex} = payload

      var listPrefix = state.slice(0, listIndex);
      var selectedList = state[listIndex];
      var listSuffix = state.slice(listIndex + 1, state.length)

      var cardPrefix = selectedList.cards.slice(0, cardIndex);
      var dummyCard = getDummyCard(selectedList.cards, listIndex, cardIndex);
      var cardSuffix = selectedList.cards.slice(cardIndex, selectedList.cards.length)

      if (dummyCard) {
        newState[listIndex].cards = [...cardPrefix, dummyCard, ...cardSuffix];
      }
      return newState;
    default:
      return newState;
  }
}

export default kanbanReducer
