import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Header} from './js/Header';
import {Home} from './js/Home.jsx';
import {About} from './js/About';
import {Shop} from './js/Shop.jsx';
import {Contact} from './js/Contact.jsx';
import {Cart} from './js/Cart.jsx';
import {Footer} from './js/Footer';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Header />
                        <div id="wrapper">
                            <Route exact path="/" component={Home} />
                            <Route path="/About" component={About} />
                            <Route path="/Shop" component={Shop} />
                            <Route path="/Contact" component={Contact} />
                            <Route path="/Cart" component={Cart} />
                        </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
  }
}

export default App;