import React, { useEffect, useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngridients, setIngrients] = useState([]);


  useEffect(() => {
    const getDataFromFirebase = async () => {
      const response = await fetch('https://react-http-db86a-default-rtdb.firebaseio.com/ingridients.json');
      const data = await response.json();
      console.log('data', data);
     const loadedData = [];
     for(const key in data){
      loadedData.push({
        id: key, 
        title: data[key].enteredIngrient.title,
        amount: data[key].enteredIngrient.amount
      });
     }
     console.log('loadedData', loadedData)
      setIngrients(loadedData);
      // console.log('ing', userIngridients);
    }
    getDataFromFirebase();
  }, []);

  const addingIngrientHandler = (enteredIngrient) => {
    console.log(enteredIngrient);

    fetch('https://react-http-db86a-default-rtdb.firebaseio.com/ingridients.json', {
      method: 'POST',
      body: JSON.stringify({ enteredIngrient }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json().then(reponseData => {
        setIngrients((previusState) => {
          const newArray = [...previusState, { id: reponseData.name, ...enteredIngrient }];

          return newArray;
        })
      });

    });


  }

  const removeIngridientHandler = (id) => {
    setIngrients((previusState) => {
      const newArray = [...previusState];
      return newArray.filter(ig => ig.id !== id);
    });
    console.log(id);
    fetch(`https://react-http-db86a-default-rtdb.firebaseio.com/ingridients.json/${id}`, {
      method: 'DELETE'
    }).then(() => {console.log('delete success')}).catch(err=>{console.log(err.message)});
  }

  return (
    <div className="App">
      <IngredientForm onAddIngridient={addingIngrientHandler} />

      <section>
        <Search />
        <IngredientList ingredients={userIngridients} onRemoveItem={removeIngridientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
