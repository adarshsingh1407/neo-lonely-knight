import React, { Component } from 'react';
import Board from 'components/Board';

class App extends Component {
  render() {
    return (
      <Board knightPosition={[0, 0]} />
    );
  }
}

export default App;
