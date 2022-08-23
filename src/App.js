import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './components/header'
import Home from './pages/home'
import NeoFeed from './pages/neofeed'
import NImages from './pages/nimages'
import Curiosity from './pages/curiosity'
import Rover from './pages/rover'
import Weather from './pages/weather'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
      <Switch>
          <Route component={Home} path="/home" exact />
          <Route component={NeoFeed} path="/neofeed" exact />
          <Route component={NImages} path="/nimages" exact />
          <Route component={Curiosity} path="/curiosity" exact />
          <Route component={Rover} path="/mrover" exact />
          <Route component={Weather} path="/weather" exact />
          <Route component={Home} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
