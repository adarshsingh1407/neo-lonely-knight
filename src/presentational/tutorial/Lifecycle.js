import React, {Component} from 'react';
import WelcomeText from 'presentational/tutorial/WelcomeText'
import WelcomeText2 from 'presentational/tutorial/WelcomeText2'

class Lifecycle extends Component {
  constructor(props){
    console.log('Lifecycle: constructor', props);
    super(props);
    this.state = {
      username: '',
      tempUsername: '',
      isLoggedIn: false
    };
  }
  componentWillMount() {
    console.log('Lifecycle: componentWillMount');
  }
  componentDidMount() {
    console.log('Lifecycle: componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    console.log('Lifecycle: componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Lifecycle: shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Lifecycle: componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Lifecycle: componentDidUpdate', prevProps, prevState);
  }
  handleUserNameChange(e) {
    this.setState({
      tempUsername: e.target.value
    }, () => {
      console.log('===handleUserNameChange===', this.state);
    });
  }
  handleLogin() {
    this.setState({
      isLoggedIn: true,
      username: this.state.tempUsername
    }, () => {
      console.log('===handleLogin===', this.state);
    });
  }
  render(){
    console.log('Lifecycle: render');
    const {username, tempUsername, isLoggedIn} = this.state;
    return(
      <div>
        <input type="text" name="" value={tempUsername} onChange={(e) => this.handleUserNameChange(e)} />
        <button type="button" onClick={this.handleLogin.bind(this)}>Login</button>
        <WelcomeText username={this.state.username} isLoggedIn={isLoggedIn} />
        {/* <WelcomeText2 username={username} isLoggedIn={isLoggedIn} /> */}
      </div>
    );
  }
}

export default Lifecycle
