import React from 'react';
import './FilterExpense.css';

const FilterExpense = (props) => {
    const handleSelectChange = (event) => {
        console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter__controls'>
          <label>Filter by year</label>
          <select value={props.select} onChange = {handleSelectChange} >
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    );
}


export default FilterExpense;