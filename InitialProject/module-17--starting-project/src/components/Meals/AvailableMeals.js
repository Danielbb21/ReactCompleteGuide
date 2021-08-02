import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useCallback, useEffect, useState } from 'react';




const AvailableMeals = () => {
  const [isLoading, setIsLoadding] = useState(true);
  const [food, setFood] = useState([]);
  const [hasError, setHasError] = useState(false);

  const fetchMeals = useCallback(async () => {
    try {
      setHasError(false);
      const response = await fetch('https://tasks-6afd2-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error('Sommeting went Wrong');
      }
      const data = await response.json();
      setIsLoadding(false);
      
      const meals = [];
      for (var meal in data) {
        meals.push({
          id: Math.random().toString(),
          name: data[meal].name,
          description: data[meal].description,
          price: data[meal].price
        })

      }

      setFood(meals);
    }
    catch (err) {
      setIsLoadding(false);
      console.log(err.message);
      setHasError(true);
    }
  }, []);
  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);
  

  const mealsList = food.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      {isLoading && !hasError && <p>Loadding meals...</p>}
      {hasError && <p>Somment went wrong</p>}
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
