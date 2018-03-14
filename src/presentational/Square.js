import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      dbState: ''
    };
  }
  handleDoubleClick() {
    const {pos} = this.props;
    this.setState({
      dbState: JSON.toString(pos)
    }, () => {
      console.log('handleDoubleClick', this.state, pos);
      this.props.moveKnight(pos)
    })
  }
  render() {
    const { black } = this.props;
    const fill = black ? '#212121' : 'white';
    const stroke = black ? 'white' : '#212121';

    return (
      <div onClick={() => this.handleDoubleClick()}>
        {this.props.children}
        {this.state.dbClicked}
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
