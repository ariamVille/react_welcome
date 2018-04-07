import React, { Component } from 'react';
import './MobileHeader';
class MobileHeader extends Component {
  render() {
    return (
      <div class="title-bar hide-for-large">
        <div class="title-bar-left">
          <button class="menu-icon" type="button" data-toggle="my-info"></button>
          <span class="title-bar-title">Mike Mikerson</span>
        </div>
      </div>
    );
  }
}

export default MobileHeader;
