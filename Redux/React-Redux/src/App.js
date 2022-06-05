import React, { Fragment } from 'react'
import Header from './components/Header'
import Auth from './components/Auth'
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;
