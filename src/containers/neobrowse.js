import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);  

    this.state = {
      img: "img/apod.jpg"
    };
    
  }

  render() {
    return (
      <div className="container shadow p-4 bg-white">
        <h2>Neo - Browse</h2>
        <img src={this.state.img} alt="x" />
      </div>
    )
  }
}

export default Home;