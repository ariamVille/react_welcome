import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/foundation.min.css';
import './styles/custom.css';
import Header from './components/Header/Header';
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (

      <div class="off-canvas-wrapper">

        <div class="off-canvas-inner" data-off-canvas-wrapper>

            <div class="off-canvas-content" data-off-canvas-content>
                  
                 <MobileHeader/>
                 <Header />

                          <div class="grid-x grid-margin-x small-up-2 medium-up-3 large-up-4">
                              <div class="cell">
                                <img class="thumbnail" src="https://placehold.it/550x550"/>
                                  <h5>My Site</h5>
                              </div>
                          </div>

                        <hr/>

                       <Footer/>
            </div>
          
        </div>
    
    </div>

    );
  }
}

export default App;
