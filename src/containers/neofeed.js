import React, { Component } from 'react';
import {getNeoFeed} from '../webservice'
import { Link } from "react-router-dom";

class Home extends Component {

  constructor(props) {
    super(props);  

    this.state = {
      data: []
    };

  }

  async componentDidMount() {
    const result = await getNeoFeed(); 
    this.setState({
      data: result.near_earth_objects["2015-09-08"]
    })  
    console.log(this.state.data)
  }

  render() {

    const listItems = this.state.data.map((item) =>  
      <li>
        <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{item.id} {item.name}</h5>
      <small>{item.is_potentially_hazardous_asteroid?'It is potentially hazardous':'It is not potentially hazardous'}</small>
    </div>
    <p class="justify-content-between">Estimated diameter meters min: {item.estimated_diameter.meters.estimated_diameter_min}, estimated diameter meters max: {item.estimated_diameter.meters.estimated_diameter_max}, nasa_jpl_url: {item.nasa_jpl_url}</p>
    <p>Orbiting body: {item.close_approach_data[0].orbiting_body}, miss distance astronomical: {item.close_approach_data[0].miss_distance.astronomical}, miss distance lunar: {item.close_approach_data[0].miss_distance.lunar}, miss distance kilometers: {item.close_approach_data[0].miss_distance.kilometers}, relative velocity kilometers per second {item.close_approach_data[0].relative_velocity.kilometers_per_second}</p>
    <small>{item.absolute_magnitude_h}</small>
  </a>

         
      </li>);

    return (
      <div className="container shadow p-4 bg-white">
        <h2>Neo - Feed</h2>
         <ul class="list-group">{listItems}</ul>       
      </div>
    )
  }
}

export default Home;