import React, { Component } from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import NavBar from './navbar'

class Home extends Component {
  render() {
    return ( 
        <div className="header">
            <div className="container">
                <div class="row align-items-center">
                    <div class="col-md-2 d-flex justify-content-start">
                        <Logo width={100} />                     
                    </div>
                    <div class="col-md-6 d-flex justify-content-start">
                        <h1 className="align-middle">National Aeronautics and Space Administration</h1>
                    </div>
                    <div class="col-md-4">
                        <div class="d-flex flex-row-reverse bd-highlight ">
                            <div class="p-2 bd-highlight"><i class="fab fa-facebook"></i></div>
                            <div class="p-2 bd-highlight"><i class="fab fa-instagram-square"></i></div>
                            <div class="p-2 bd-highlight"><i class="fab fa-twitter-square"></i></div>
                            <div class="p-2 bd-highlight"><i class="fab fa-youtube"></i></div>
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