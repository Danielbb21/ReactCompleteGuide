import React, { useState } from 'react';
import './ExpenseForm.css';
import ExpenseItem from '../Expenses/ExpenseItem';

const ExpenseForm = (props) => {

    const [title, setTile] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const clearInput = () => {
        setTile('');
        setAmount('');
        setDate('');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveExpenseData(expenseDate);
        props.counterData(0);
        clearInput();

        return <ExpenseItem title={title} amount={amount} date={date} />
    }
    const handleCancelButton = (e)=>{
        e.preventDefault();
        props.counterData(0);
    }

    return (
        <div>
            <form onSubmit={submitHandler} style= {{display:'inline'}}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={title} onChange={(e) => setTile(e.target.value)} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' min="0.01" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2022-12-31" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type='button' onClick = {handleCancelButton}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
            
        </div>
    );
}

export default ExpenseForm;