import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound'
import Quotes from './pages/Quotes';
import AddQuote from './pages/AddQuote';
import QuteDetails from './pages/QuoteDetails';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>

        <Route path='/quotes' exact>
          <Quotes />
        </Route>

        <Route path='/quotes/add' exact>
          <AddQuote />
        </Route>

        <Route path='/quotes/:id'>
          <QuteDetails />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
