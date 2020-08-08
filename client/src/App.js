import React, { Fragment } from 'react';
import Landing from './components/Landing';
import './App.scss';

const App = () => {

  return(
    <Fragment>
      <header className='header'>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <section className='container'>  
        <Landing />
        <footer className='footer'>Developed by: Apoorva Srivastava</footer>
      </section>
     
    </Fragment>
       
  );
};

export default App;
