import React, { useState, Fragment } from 'react'
import Cards from './Cards';
import Filters from './Filters';

export const Landing = () => {
  const [ filters, setFilters ] = useState({});

  return(
    <Fragment>
      <Filters onClick={ setFilters } filters = { filters }/>
      <Cards filters = { filters }/>
    </Fragment>
  );
  
}

export default Landing;