import React, { Component } from 'react';
import './Welcome';
class Welcome extends Component {
  render() {
    return (
      <div className="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
        <div className="cell">
          <h2>Welcome!</h2>
        </div>
      </div>
    );
  }
}

export default Welcome;
