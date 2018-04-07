import React, { Component } from 'react';
import './Login';
class Login extends Component {

  constructor(props){
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  login(){
    console.log("login function");
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);    
  }

  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column bodyPart" >
          <h2>Login page</h2>
          <label>Username</label>
          <input type="text" name="username" placeholder="input username" onChange={this.onChange}/>
          <label>Password</label>
          <input type="password" name="password" placeholder="input password" onChange={this.onChange}/>
          <input type="submit" value="Login" className="button" onClick={this.login}/>
        </div>
      </div>
    );
  }
}

export default Login;
