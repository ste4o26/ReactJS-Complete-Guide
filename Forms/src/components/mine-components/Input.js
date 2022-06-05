const Input = props => {
    const blurHandler = () => props.onBlur();
    const changeValueHandler = e => {
        props.onChange(e);
    }

    return (
        <div className={props.hasError ? 'form-control invalid' : 'form-control'}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={changeValueHandler}
                onBlur={blurHandler}
            />

            {
                props.hasError &&
                <p className='error-text'>{props.errorMessage}</p>
            }
        </div>
    );
}

export default Input;