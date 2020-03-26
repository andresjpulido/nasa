import React, { Component } from 'react';
import {getAPOD} from '../webservice';

class Home extends Component {

  constructor(props) {
    super(props);  

    this.state = {
      img: ""
    };
    
  }

  async componentDidMount() {
    const result = await getAPOD(); 
    this.setState({
      img: result.url
    })  
  }

  render() {
    return (
      <div className="container shadow p-4 bg-white">
        <h2>Image of the Day</h2>
        <img src={this.state.img} alt=""/>
      </div>
    )
  }
}

export default Home;