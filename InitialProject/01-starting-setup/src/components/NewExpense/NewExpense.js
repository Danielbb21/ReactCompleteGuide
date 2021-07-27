import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [controlForm, setControlForm ] = useState(0);
   

    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onSaveExpense(expenseData);
    };
    const handleShowExpenseForm = (e) => {
        
        setControlForm(1);
    }
    const alterValue = (value)=>{
        setControlForm(value);
    }
    let content = <button onClick={handleShowExpenseForm}>Add new Expense</button>;

    if(controlForm === 1){
    
        content = <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} counterData = {alterValue}/>;
    }
  
    return (
        <div className="new-expense">
            {content}
        </div>
    );
}

export default NewExpense;