import {
  MOVE_KNIGHT,
  INIT_GAME
} from 'actions/chessActions';
import {canMoveKnight} from 'utils/chessUtil';

const DEFAULT_GAME_STATE = {
  knightPosition: {
    x: 0,
    y: 0
  }
}

const chessMove = (state = DEFAULT_GAME_STATE, action) => {
  var payload = action.payload;
  switch (action.type) {
    case INIT_GAME:
      return DEFAULT_GAME_STATE;
    case MOVE_KNIGHT:
    // console.log(state, payload);
    //   if (canMoveKnight(state.knightPosition, payload.newKnightPosition)) {
    //     return {
    //       ...state,
    //       knightPosition: payload.newKnightPosition
    //     }
    //   } else {
    //     return state;
    //   }
    return {
      ...state,
      knightPosition: payload.newKnightPosition
    }
    default:
      return state;
  }
}

export default chessMove
