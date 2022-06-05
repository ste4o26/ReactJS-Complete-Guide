import React from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const validateName = name => name.trim().length >= 6;
  const nameInput = useInput(validateName);

  const validateEmail = email => email.includes('@') && email.includes('.');
  const emailInput = useInput(validateEmail);

  let isValidForm = false;
  if (nameInput.isValid && emailInput.isValid) isValidForm = true;

  const submitFormHandler = e => {
    e.preventDefault();
    if (!isValidForm) return;

    nameInput.reset();
    emailInput.reset();

    console.log(nameInput.value, emailInput.value);
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInput.hasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='name'>Your Name</label>
        <input
          onChange={nameInput.changeValueHandler}
          onBlur={nameInput.focusHandler}
          type='text' id='name' value={nameInput.value}
        />

        {
          nameInput.hasError &&
          <p className='error-text'>Name Must be at least 6 characters long!</p>
        }
      </div>

      <div className={emailInput.hasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>Your Email</label>
        <input
          onChange={emailInput.changeValueHandler}
          onBlur={emailInput.focusHandler}
          type='email' id='email' value={emailInput.value}
        />

        {
          emailInput.hasError &&
          <p className='error-text'>Email Must contain '@' and '.'!</p>
        }
      </div>

      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
