import React, { useState } from 'react';
import './ExpenseIntem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import FilterExpense from '../FilterExpense/FilterExpense';

export default function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
    };

    return (
        
            
            <Card className="expense-item">
                <ExpenseDate date={props.date} />

                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">
                        ${props.amount}
                    </div>
                </div>
                <button onClick={clickHandler} >Change Title</button>
            </Card>
    );
}