import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (

      <footer >
        <div className="row">
           <div className="col-6 col-md">
            <h5>code.nasa.gov</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="https://code.nasa.gov">Home</a></li>
              <li><a className="text-muted" href="https://code.nasa.gov/#/guide">Guide</a></li>
              <li><a className="text-muted" href="https://code.nasa.gov/#/related">Related</a></li>
              <li><a className="text-muted" href="https://code.nasa.gov/#/experiments">Experiments</a></li>               
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>data.nasa.gov</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="https://nasa.github.io/data-nasa-gov-frontpage/">Home</a></li> 
              <li><a className="text-muted" href="https://data.nasa.gov/stories/s/gk8h-th3y">Developers</a></li> 
              <li><a className="text-muted" href="https://data.nasa.gov/login">Login</a></li> 
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>api.nasa.gov</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="https://api.nasa.gov/">Home</a></li> 
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>open.nasa.gov</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="https://open.nasa.gov">Home</a></li>
              <li><a className="text-muted" href="https://open.nasa.gov/open-data/">Open Data</a></li>
              <li><a className="text-muted" href="https://open.nasa.gov/explore/">Explore with us</a></li>
              <li><a className="text-muted" href="https://open.nasa.gov/data-stories/">Data Stories</a></li>
              <li><a className="text-muted" href="https://open.nasa.gov/innovation-space/">Innovation Space</a></li>
              <li><a className="text-muted" href="https://open.nasa.gov/about/">About</a></li>
            </ul>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
