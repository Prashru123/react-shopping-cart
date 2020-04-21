import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { Switch, Route } from 'react-router-dom';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch exact>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/details' component={Details} />
        <Route exact path='/cart' component={Cart} />
        <Route exact component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
