import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Landing = () => {

  const [res, setRes] = useState({});

  useEffect(() => {
    (async () => {
      let _res = await axios.get('https://api.spacexdata.com/v3/launches?limit=100');
      return _res;
    })().then((data) => { setRes(data); } );
   
  }, [])
  

  if( res ) {
    console.log(res); 
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else return null;
}

export default Landing;