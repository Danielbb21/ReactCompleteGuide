import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import './DisplayingExpense.css'
import Card from '../UI/Card'
import FilterExpense from '../FilterExpense/FilterExpense';

export default function DisplayingExpense(props) {

    const [filter, setFilter] = useState('2020');

    const data = props.expenses;
    console.log('data receaved', data);
    const createExpense = data.map((expense) => {
        return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    });

    const handleFilter = (filteredYear)=>{
        console.log('before', filter);
        setFilter(filteredYear);
        console.log(filteredYear);
    }

    return (
        <div>
           
            <Card className="expenses" >
            <FilterExpense onChangeFilter = {handleFilter} select = {filter}/>
                {createExpense}
            </Card>
        </div>
    )
}