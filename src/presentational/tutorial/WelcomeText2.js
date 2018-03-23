import React, {Component} from 'react';

const GUEST_USER_NAME = 'Guest'

class WelcomeText2 extends Component {
  constructor(props){
    console.log('WelcomeText2: constructor', props);
    super(props);
    this.state = {
      displayName: props.username || GUEST_USER_NAME,
      isLoggedIn: props.isLoggedIn
    };
  }
  componentWillMount() {
    console.log('WelcomeText2: componentWillMount');
  }
  componentDidMount() {
    console.log('WelcomeText2: componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('WelcomeText2: componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('WelcomeText2: shouldComponentUpdate', nextProps, this.props);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('WelcomeText2: componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('WelcomeText2: componentDidUpdate', prevProps, prevState);
  }
  render(){
    console.log('WelcomeText2: render');
    const {displayName, isLoggedIn} = this.state;
    return(
      <div>
        Welcome, {displayName}!
        {isLoggedIn ? ' You are logged in!': ''}
      </div>
    );
  }
}

export default WelcomeText2
