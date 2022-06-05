import React, { Fragment } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>

        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/products' exact>
          <Products />
        </Route>

        <Route path='/products/:id'>
          <ProductDetails />
        </Route>
        
      </Switch>
    </Fragment>
  );
}

export default App;
