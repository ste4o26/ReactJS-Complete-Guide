import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/auth-slice';

import classes from './Auth.module.css';

const Auth = () => {
  const usernameInputRef = useRef();

  const dispatch = useDispatch();
  const loginHandler = e => {
    e.preventDefault();
    const username = usernameInputRef.current.value;
    dispatch(authActions.login({ username: username }))
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='username'>Username</label>
            <input ref={usernameInputRef} type='text' id='username' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
