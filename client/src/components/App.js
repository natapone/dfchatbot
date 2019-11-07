import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
