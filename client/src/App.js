import React, { Fragment } from 'react';
import Landing from './components/Landing';
import './App.scss';

const App = () => {

  return(
    <Fragment>
      <header>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <section className="container">  
        <Landing />
      </section>
      <footer>Developed by: Apoorva Srivastava</footer>
    </Fragment>
       
  );
};

export default App;
