import React from 'react';
import './NewExpense.css';

const NewExpense = () =>{
    return(
      <div className="new-expense">
          <form>
                <div class="element">
                    <label>Title</label>
                    <br/>
                    <input type='text'/>
                </div>
                <div class="element">
                    <label>Amount</label>
                    <br/>
                    <input type='number'/>
                </div>
                <div class="element">
                    <label>Date</label>
                    <br/>
                    <input type='date'/>
                </div>
          </form>
      </div>
    );
}

export default NewExpense;