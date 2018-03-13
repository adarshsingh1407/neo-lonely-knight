import React, { Component } from 'react';

export default class Knight extends Component {
  render() {
    const {show} = this.props;
    if (show) {
      return <div align="center" style={{'font-size': '2em'}}>
        ♘
      </div>;
    } else {
      return (<div align="center" style={{'font-size': '2em'}}>
        &nbsp;
      </div>);
    }
  }
}
