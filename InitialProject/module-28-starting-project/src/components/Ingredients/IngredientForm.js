import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../UI/Card';
import './IngredientForm.css';

const Input = styled.input`
  width: 120px;
  
`;

const IngredientForm = React.memo(props => {
  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredName, amount: enteredAmount });

    setEnteredAmount('');
    setEnteredName('');
  };

  const [enteredName, setEnteredName] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const changeNameHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  return (

    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <Input onChange={changeNameHandler} type="text" id="title" value={enteredName} />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <Input onChange={changeAmountHandler} type="number" id="amount" value={enteredAmount} />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
