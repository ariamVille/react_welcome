import React, { Component } from 'react';
import './Welcome';
class Welcome extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="cell ">
          <h2>Project Description</h2>
          <a href='/login' class="button ">Login</a>
          <a href='/Signup' class="button success">Signup</a>
        </div>
      </div>
    );
  }
}

export default Welcome;
