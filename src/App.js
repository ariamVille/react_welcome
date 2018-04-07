import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/foundation.min.css';
import './styles/custom.css';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';

class App extends Component {

 


  render() {
    return (

      <div className="off-canvas-wrapper">

        <div className="off-canvas-inner" data-off-canvas-wrapper>

            <div className="off-canvas-content" data-off-canvas-content>
                  
                 <MobileHeader/>
                 <Header />
                 <Welcome/>
                  <hr/>
                 <Footer/>
            </div>
          
        </div>
    
    </div>

    );
  }
}

export default App;
