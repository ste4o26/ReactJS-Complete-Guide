import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../context/auth-context';

const emailReducer = (prevState, dispachedAction) => {
  const currentState = {
    value: '',
    isValid: false,
  };

  if (dispachedAction.type === 'EMAIL_INPUT') {
    currentState.value = dispachedAction.value;
    currentState.isValid = dispachedAction.value.includes('@');
  }

  if (dispachedAction.type === 'EMAIL_BLUR') {
    currentState.value = prevState.value;
    currentState.isValid = prevState.value.includes('@');
  }

  return currentState;
}

const passwordReducer = (prevState, dispachedAction) => {
  const currentState = {
    value: '',
    isValid: false
  }

  if (dispachedAction.type === 'PASSWORD_INPUT') {
    currentState.value = dispachedAction.value;
    currentState.isValid = dispachedAction.value.trim().length >= 6;
  }

  if (dispachedAction.type === 'PASSWORD_BLUR') {
    currentState.value = prevState.value;
    currentState.isValid = prevState.value.trim().length >= 6;
  }

  return currentState;
}

const Login = () => {
  const authContext = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(emailState.value, passwordState.value);
  };

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    {
      value: '',
      isValid: undefined,
    });

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    {
      value: '',
      isValid: undefined,
    });

  const validateEmailHandler = () => dispatchEmail({ type: 'EMAIL_BLUR' });
  const emailChangeHandler = (event) => dispatchEmail({
    type: 'EMAIL_INPUT',
    value: event.target.value
  });

  const validatePasswordHandler = () => dispatchPassword({ type: 'PASSWORD_BLUR' })
  const passwordChangeHandler = (event) => dispatchPassword({
    type: 'PASSWORD_INPUT',
    value: event.target.value
  })

  // useEffect is used to execute aome code that should be executed in response to some other action!
  // (e.g. http calls, setTimeout, setInterval, and examples like this)
  const { isValid: isValidEmail } = emailState;
  const { isValid: isValidPassword } = passwordState;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    // The clean up function is executed before everything in useEffect except the first time useEffect is executed!
    return () => clearTimeout(timeout);
  }, [isValidEmail, isValidPassword]);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type={'email'}
          id={'email'}
          value={emailState.value}
          isValidInput={emailState.isValid}
          label={'E-Mail'}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        
        <Input
          type={'password'}
          id={'password'}
          value={passwordState.value}
          isValidInput={passwordState.isValid}
          label={'Password'}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
