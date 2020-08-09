import React, { Fragment } from 'react'
import Cards from './Cards';
import Filters from './Filters';

class Landing extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      filters: {}
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick( payload ) {
    this.setState( { filters: payload } );
  }


  render() {
    const filters = this.state.filters;
    return(
      <Fragment>
        <Filters onClick={ this.onClick } filters = { filters }/>
        <Cards filters = { filters }/>
      </Fragment>
    );
  }
  
}

export default Landing;