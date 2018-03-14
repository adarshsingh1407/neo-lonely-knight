import React, { Component } from 'react';
import classNames from 'classnames'

const pieceSize = '3em'

const pieceStyle = {
  fontSize: pieceSize
}

export default class Knight extends Component {
  render() {
    const {show, pos} = this.props;
    const black = (pos.x + pos.y) % 2 === 1;
    if (show) {
      return (<div className={classNames({
        black: black,
        white: !black
      })}>&#9822;</div>);
    } else {
      return (<div className={classNames({
        black: black,
        white: !black
      })}>&nbsp;</div>);
    }
  }
}
