import React, { useState } from 'react';
import ExpensesChart from './ExpensesChart';

import './DisplayingExpense.css'
import Card from '../UI/Card';

import FilterExpense from '../FilterExpense/FilterExpense';
import ExpensesList from './ExpensesList';

export default function DisplayingExpense(props) {

    const [filter, setFilter] = useState('2020');

    const data = props.expenses;
    console.log('data receaved', data);

    const handleFilter = (filteredYear) => {
        console.log('before', filter);
        setFilter(filteredYear);
        console.log(filteredYear);
    }

    const filteresExpenses = props.expenses.filter(expense => {
        return Number(filter) === expense.date.getFullYear();
    })


    return (
        <div>

            <Card className="expenses" >
               
                <FilterExpense onChangeFilter={handleFilter} select={filter} />
                <ExpensesChart expenses = {filteresExpenses}/>
                <ExpensesList items={filteresExpenses} />
                
            </Card>
        </div>
    )
}