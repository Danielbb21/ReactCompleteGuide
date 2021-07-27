import React from 'react';
import DisplayingExpense from "./components/Expenses/DisplayingExpense";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const expenses = [{
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 9, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 29),
  },
  {
    id: 'e5',
    title: 'New test (Wooden)',
    amount: 5000,
    date: new Date(2021, 6, 26),
  },
  ]
  const handleSaveExpense = (expenseSaved) =>{
    // const newExpensesArray =  [{...expenses, expenseSaved}];
    // expenses.push(expenseSaved);
     console.log(expenseSaved);
    //  return expenses
  }

  return (
    <div>
      <NewExpense onSaveExpense={handleSaveExpense}/>
      <DisplayingExpense expenses={expenses} />
    </div>
  );
}

export default App;
