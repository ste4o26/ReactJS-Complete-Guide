import React from 'react';

import ExpenseItem from './ExpenseItem';

import './css/ExpensesList.css';

const ExpensesList = props => {
    if (props.expenses.length <= 0) return <h2 className="expenses-list__fallback">No Expenses found!</h2>;

    return (
        <ul className="expenses-list">
            {props.expenses.map(expense => {
                return <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            })}
        </ul>
    );
}

export default ExpensesList;