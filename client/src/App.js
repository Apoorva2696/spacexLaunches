import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import { loadUser } from './actions/auth';
import './App.scss';

// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  useEffect( () => {
    store.dispatch(loadUser());
  }, []);

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
