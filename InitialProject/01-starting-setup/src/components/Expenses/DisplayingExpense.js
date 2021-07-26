import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './DisplayingExpense.css'
import Card from '../UI/Card'

export default function DisplayingExpense(props){
    const data = props.expenses;
    console.log('data receaved', data);
    const createExpense = data.map((expense)=>{
        return <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} date = {expense.date}/>
    });
    console.log('teste', createExpense);

    return(
       <Card className="expenses">
       {createExpense}
       </Card>
    )
}