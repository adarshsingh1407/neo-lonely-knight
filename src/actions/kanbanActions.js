const CREATE_LIST = 'CREATE_LIST';
const CREATE_CARD = 'CREATE_CARD';
const MOVE_LIST = 'MOVE_LIST';
const MOVE_CARD = 'MOVE_CARD';
const ADD_PLACEHOLDER_CARD = 'ADD_PLACEHOLDER_CARD';
const HOVERED_ON = 'HOVERED_ON'

const createList = (list) => {
  return ({
    type: CREATE_LIST,
    payload: {
      newList: list
    }
  })
}

const createCard = (card, listId) => {
  return ({
    type: CREATE_CARD,
    payload: {
      newCard: card,
      listId
    }
  })
}

const moveList = (listId, targetPos) => {
  return ({
    type: MOVE_LIST,
    payload: {
      listId,
      targetPos
    }
  })
}

const moveCard = (cardId, targetPos) => {
  return ({
    type: MOVE_CARD,
    payload: {
      cardId,
      targetPos
    }
  })
}

const addPlaceholderCard = (listIndex, cardIndex) => {
  return ({
    type: ADD_PLACEHOLDER_CARD,
    payload: {
      listIndex,
      cardIndex
    }
  })
}

const processHoveredOn = (listIndex, cardIndex) => {
  return ({
    type: HOVERED_ON,
    payload: {
      listIndex,
      cardIndex
    }
  })
}

export {
  CREATE_LIST,
  CREATE_CARD,
  MOVE_LIST,
  MOVE_CARD,
  ADD_PLACEHOLDER_CARD,
  HOVERED_ON,
  createList,
  createCard,
  moveList,
  moveCard,
  addPlaceholderCard,
  processHoveredOn
}
