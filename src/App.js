import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './containers/home';
import Asteroids from './containers/asteroids';
import curiosity from './containers/curiosity';

function App() {

  var _pending = ""

  return (
    <div className="App">

      <BrowserRouter>
        <div>
          <Header />
            <Switch> 
              <Route
                path="/"
                exact
                component={Home}
              /> 
              <Route
                path="/asteroids"
                exact
                component={Asteroids}
              /> 
              <Route
                path="/curiosity"
                exact
                component={curiosity}
              />                     
              <Redirect to="/" />
            </Switch>

            {
            _pending   &&
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            }
   
        </div>
      </BrowserRouter>
      <Footer />
   
    </div>
     
  );
}

export default App;
