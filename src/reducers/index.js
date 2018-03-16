import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import kanbanReducer from './kanbanReducer'

export default combineReducers({
  gameState: gameReducer,
  kanbanState: kanbanReducer
});
