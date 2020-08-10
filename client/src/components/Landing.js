import React, { Fragment } from 'react'
import Cards from './Cards';
import Filters from './Filters';

class Landing extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      filters: {} // filters object
    };

    this._bind();
   
  }

  // bind methods to the context
  _bind(){
    this.onClick = this.onClick.bind(this);
  }

  // method called on click of the filters and sets the new filters in state
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