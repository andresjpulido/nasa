import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container shadow p-4 bg-white">
        <h2>Image of the Day</h2>
        <img src="img/apod.jpg" />
      </div>
    )
  }
}

export default Home;