import React, { useState } from 'react';
import Expenses from './components/domain/Expenses/Expenses';
import NewExpense from './components/domain/New-Expense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 265.4,
    date: new Date(2021, 4, 27)
  },

  {
    id: '2',
    title: 'XBOX Series S',
    amount: 250,
    date: new Date(2022, 2, 12)
  },

  {
    id: '3',
    title: 'Lenovo Legion Laptop',
    amount: 1099.99,
    date: new Date(2020, 11, 18)
  },

  {
    id: '4',
    title: 'Anime Waifu Stickers',
    amount: 7.56,
    date: new Date(2021, 1, 10)
  }
]

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpensesHandler = expenseData => {
    setExpenses(prevExpenses => setExpenses([expenseData, ...prevExpenses]));
  }

  return (
    <div>
      <NewExpense onNewExpense={addExpensesHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App;
