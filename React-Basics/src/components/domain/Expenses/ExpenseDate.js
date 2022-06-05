import React from 'react';

import Card from '../../ui/Card'

import './css/ExpenseDate.css';

const ExpenseDate = props => {
    const date = {
        year: props.date.getFullYear(),
        month: props.date.toLocaleString('en-US', { month: 'long' }),
        day: props.date.toLocaleString('en-US', { day: '2-digit' })
    }

    return (
        <Card className = "expense-date">
            <div className="expense-date__day">{date.day}</div>
            <div className="expense-date__month">{date.month}</div>
            <div className="expense-date__year">{date.year}</div>
        </Card>
    );
}

export default ExpenseDate;