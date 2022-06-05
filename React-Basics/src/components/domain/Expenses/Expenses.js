import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../../ui/Card';

import './css/Expenses.css';

const Expenses = props => {
    const [year, setYear] = useState('2022');
    const expensesFilterHandler = yearAsString => setYear(yearAsString);

    const filteredExpenses = props.expenses
        .filter(expense => expense.date.getFullYear().toString() === year);

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseFilter selectedYear={year} onSelectYear={expensesFilterHandler} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;