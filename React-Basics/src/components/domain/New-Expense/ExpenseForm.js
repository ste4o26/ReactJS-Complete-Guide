import React, { useState } from 'react';
import './css/ExpenseForm.css';

const ExpenseForm = props => {
    const [title, setTitle] = useState('');
    const titleChangeHandler = e => setTitle(e.target.value);

    const [amount, setAmout] = useState('');
    const amountChangeHandler = e => setAmout(e.target.value);

    const [date, setDate] = useState('');
    const dateChangeHandler = e => setDate(e.target.value);

    const cancelFormHandler = () => props.onFormCancel();

    const submitHandler = e => {
        e.preventDefault();
        const data = {
            title,
            amount: +amount,
            date: new Date(date)
        }

        props.onExpenseSave(data);

        setTitle('');
        setAmout('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleChangeHandler} value={title} type="text" />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountChangeHandler} value={amount} type="number" min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateChangeHandler} value={date} type="date" min="2019-01-01" max="2023-12-31" />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={cancelFormHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;