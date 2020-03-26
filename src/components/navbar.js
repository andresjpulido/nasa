import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (        


        <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="container">
            <Link to={`/`} className="navbar-brand">Nasa</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#collapsibleNavbar" aria-controls="navbarCollapse" aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="dropdown">
                        <Link to={`/asteroids`} className="nav-link" data-toggle="dropdown">Asteroids</Link>
                        <ul className="dropdown-menu"> 
                            <li className="text-center"><Link to={`/neofeed`}>Neo - Feed</Link></li>                  
                            <li className="text-center"><Link to={`/neobrowse`}>Neo - Browse</Link></li>                       
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link to={`/curiosity`} className="nav-link">Curiosity</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/curiosity`} className="nav-link">Curiosity</Link>
                    </li>    
                </ul>
                </div>
            </div>  
        </nav> 

        
    );
  }
}

export default Navbar;