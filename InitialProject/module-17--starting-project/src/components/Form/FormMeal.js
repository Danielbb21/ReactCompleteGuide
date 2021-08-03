import React from 'react';
import useInput from '../../hooks/use-input';

const InputTextValidy = (value) => value.trim() !== '';
const InputNumberValidy = (value) => value > 0;

const FormMeal = (props) => {
    const { value: mealName, onChange: onChangeName, isValidy: nameIsValid, reset: resetName } = useInput(InputTextValidy);
    const { value: mealDesc, onChange: onChangeDesc, isValidy: descIsValid, reset: resetDesc } = useInput(InputTextValidy);
    const { value: mealPrice, onChange: onChangePrice, isValidy: priceIsValid, reset: resetPrice } = useInput(InputNumberValidy);
    const formIsValid = nameIsValid && descIsValid && priceIsValid;

    const submitMealHandler = async (event) => {
        event.preventDefault();
        if (formIsValid) {
            console.log(mealName, mealDesc, mealPrice);
            resetName();
            resetDesc();
            resetPrice();
            const mealObj = {
                id: Math.random().toString(),
                description: mealDesc,
                name: mealName,
                price: Number(mealPrice)
            };
            try {
                const response = await fetch('https://tasks-6afd2-default-rtdb.firebaseio.com/meals.json', {
                    method: 'POST',
                    body: JSON.stringify(mealObj),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if(!response.ok){
                    throw new Error('Sommeting went wrong');
                }

                const data = await response.json();
                console.log(data);

            }
            catch (err) {
                console.log(err.message);
            }
        }

    }
    return (
        <>
            <form style={{ display: "flex", flexDirection: "column" }} onSubmit={submitMealHandler}>
                <label html-for="mealName">Meal Name</label>
                <input value={mealName} onChange={onChangeName} type="text" id="mealName" />
                <label html-for="mealDesc">Meal Description</label>
                <input type="text" value={mealDesc} onChange={onChangeDesc} id="mealDesc" />
                <label html-for="mealPrice">Meal Price</label>
                <input value={mealPrice} onChange={onChangePrice} type="number" id="mealPrice" />
                <button disabled={!formIsValid} type="submit">Add new meal</button>
            </form>
        </>

    );
};

export default FormMeal;