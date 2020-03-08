import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (        
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div className="container">
            <a class="navbar-brand" href="/">Nasa</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/asteroids">Asteroids</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/curiosity">Curiosity</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>    
                </ul>
                </div>
            </div>  
        </nav> 
    );
  }
}

export default Navbar;