import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.scss';
import Header from './components/header'
import Home from './pages/home'
import NeoFeed from './pages/neofeed'
import NImages from './pages/nimages'
import Curiosity from './pages/curiosity'
import Rover from './pages/rover'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NeoFeed} path="/neofeed" exact />
          <Route component={NImages} path="/nimages" exact />
          <Route component={Curiosity} path="/curiosity" exact />
          <Route component={Rover} path="/mrover" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
