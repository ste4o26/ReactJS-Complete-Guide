import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm'
import './css/NewExpense.css';

const NewExpense = props => {
    const saveExpenseHnadler = expenseData => {
        const data = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onNewExpense(data);
    }

    const [isOpenedForm, setOpenForm] = useState(false);
    const toggleFormHandler = () => {
        setOpenForm(prevFlag => setOpenForm(!prevFlag));
    }

    return (
        <div className="new-expense">
            {
                isOpenedForm
                    ? <ExpenseForm onFormCancel={toggleFormHandler} onExpenseSave={saveExpenseHnadler} />
                    : <button type="button" onClick={toggleFormHandler}>Add New Expense</button>
            }
        </div>
    );
}

export default NewExpense;