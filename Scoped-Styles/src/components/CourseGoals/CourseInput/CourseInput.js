import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import classes from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) setIsValidInput(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  // The && in this case is returning the result after it in case if we past the first check which is !isValidInput 
  const formClasses = `${classes['form-control']} ${!isValidInput && classes.invalid}`;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClasses}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
