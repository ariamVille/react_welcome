import React, { Component } from 'react';
import './Header';
class Header extends Component {
  render() {
    return (


      <div className="callout primary" id="Header">
        <article className="grid-container">
          <div className="">
            <h1>{this.props.name} Project</h1>
          </div>
        </article>
      </div>

    );
  }
}

export default Header;
