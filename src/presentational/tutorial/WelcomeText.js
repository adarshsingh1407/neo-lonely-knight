import React, {Component} from 'react';

const GUEST_USER_NAME = 'Guest'

class WelcomeText extends Component {
  constructor(props){
    console.log('WelcomeText: constructor', props);
    super(props);
    this.state = {};
  }
  componentWillMount() {
    console.log('WelcomeText: componentWillMount');
  }
  componentDidMount() {
    console.log('WelcomeText: componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('WelcomeText: componentWillReceiveProps', nextProps);
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('WelcomeText: shouldComponentUpdate', nextProps, this.props);
  //   // if (this.props.username === nextProps.username) {
  //   //   console.log('WelcomeText: shouldComponentUpdate', false);
  //   //   return false;
  //   // }
  //   return true;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log('WelcomeText: componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('WelcomeText: componentDidUpdate', prevProps, prevState);
  }
  render(){
    console.log('WelcomeText: render');
    const {username, isLoggedIn} = this.props;
    var displayName = GUEST_USER_NAME;
    if (username && username.length > 0) {
      displayName = username
    }
    return(
      <div>
        Welcome, {displayName}!
        {isLoggedIn ? ' You are logged in!': ''}
      </div>
    );
  }
}

export default WelcomeText
