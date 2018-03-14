import {connect} from 'react-redux';
import {
  moveKnight,
  initGame
} from 'actions/chessActions'
import Board from 'presentational/Board'

const mapDispatchToProps = dispatch => {
  return {
    moveKnight: (newPosition) => dispatch(moveKnight(newPosition)),
    initGame: () => dispatch(initGame())
  };
};

const mapStateToProps = state => {
  return {
    gameState: state.gameState
  };
};

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
