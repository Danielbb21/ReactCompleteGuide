import React, { useState } from 'react';
// import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import style from './CourseInput.module.css';

// const FormControl = styled.div`

//   margin: 0.5rem 0;


//  & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid ? 'red': 'black'}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//   background: ${props=> props.invalid ? ' ': ''};
//   background: ${props=> props.invalid ? 'rgb(255, 189, 189)': ''};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

//   & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style['form-control']} ${!isValid && style.invaid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {!isValid ? <p style={{ color: 'red' }}>Please insert your goal</p> : ''}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
