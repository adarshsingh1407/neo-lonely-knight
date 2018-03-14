const MOVE_KNIGHT = 'MOVE_KNIGHT';
const INIT_GAME = 'INIT_GAME';

const moveKnight = (newKnightPosition) => {
  return ({
    type: MOVE_KNIGHT,
    payload: {
      newKnightPosition: newKnightPosition
    }
  });
}

const initGame = () => {
  return ({
    type: INIT_GAME
  });
}

export {
  INIT_GAME,
  MOVE_KNIGHT,
  moveKnight,
  initGame
}
