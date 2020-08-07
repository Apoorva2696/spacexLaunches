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
  
  console.log(res);

  if( 0 !== Object.keys( res ).length ) {
    return (
        <section className="landing">
        <div className="card__container">
          {
            res.data.map( ( item, index ) => {
              console.log(index,item.rocket.first_stage.cores[0].land_success);
              return(
                <div key={`${item.mission_name}_${index}`}>
                  <img src={item.links.mission_patch} width="20px" height="20px"/>
                  <div>
                    <p>{`${item.mission_name} # ${item.flight_number}`}</p>
                    <p>{ null === item.launch_success ? 'null':item.launch_success.toString()}</p>
                    <p>{item.launch_year}</p>
                    <p>{ null === item.rocket.first_stage.cores[0].land_success ? 'null':item.rocket.first_stage.cores[0].land_success}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    );
  } else return null;
}

export default Landing;