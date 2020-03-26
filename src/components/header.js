import React, { Component } from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import NavBar from './navbar'

class Home extends Component {
  render() {
    return ( 
        <div className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2 d-flex justify-content-start">
                        <Logo width={100} />                     
                    </div>
                    <div className="col-md-6 d-flex justify-content-start">
                        <h1 className="align-middle">National Aeronautics and Space Administration</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-row-reverse bd-highlight ">
                            <div className="p-2 bd-highlight"><i className="fab fa-facebook"></i></div>
                            <div className="p-2 bd-highlight"><i className="fab fa-instagram-square"></i></div>
                            <div className="p-2 bd-highlight"><i className="fab fa-twitter-square"></i></div>
                            <div className="p-2 bd-highlight"><i className="fab fa-youtube"></i></div>
                        </div>
                    </div>    
                </div>
            </div>             
            <NavBar />
        </div>
    )
  }
}

export default Home;