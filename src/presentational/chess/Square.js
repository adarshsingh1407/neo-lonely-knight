import React, { Component } from 'react';
import classNames from 'classnames'

export default class Square extends Component {
  render() {
    const {isOver} = this.props;
    return (
      <div className={classNames({
        'dnd-is-over': isOver
      })}>
        {this.props.children}
      </div>
    );
  }
}
