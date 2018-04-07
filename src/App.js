import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/foundation.min.css';
import './styles/custom.css';
import Header from './components/Header/Header';
import Routes from './routes';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      appName: 'Banana'
    }
  }


  render() {
    return (
      <div className="off-canvas-wrapper">
        <div className="off-canvas-inner" data-off-canvas-wrapper>
            <div className="off-canvas-content" data-off-canvas-content>
                 <MobileHeader name={this.state.appName}/>
                 <Header name={this.state.appName}/>
                 <Routes name={this.state.appName}/>
                  <hr/>
                 <Footer/>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
