import React from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  let divClasses;
  divClasses = `${props.input.error === 'true' ? classes.invalid : classes['cart-input']}`;
  if (props.input.error === undefined) divClasses = classes.input;

  return (
    <div className={divClasses}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {props.input.error === 'true' && <p>Invalid input!</p>}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
