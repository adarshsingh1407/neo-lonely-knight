const CREATE_LIST = 'CREATE_LIST';
const CREATE_CARD = 'CREATE_CARD';
const MOVE_LIST = 'MOVE_LIST';
const MOVE_CARD = 'MOVE_CARD';

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

export {
  CREATE_LIST,
  CREATE_CARD,
  MOVE_LIST,
  MOVE_CARD,
  createList,
  createCard,
  moveList,
  moveCard
}
