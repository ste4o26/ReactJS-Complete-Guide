import React, { Fragment, useEffect, useState } from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../../hooks/use-http';

const FIREBASE_DB = 'https://react-http-dff3e-default-rtdb.europe-west1.firebasedatabase.app/meals.json';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  const modifyLoadedMeals = loadedMeals => {
    for (const mealId in loadedMeals) {
      if (Object.hasOwnProperty.call(loadedMeals, mealId)) {
        const meal = { ...loadedMeals[mealId], id: mealId };
        setMeals(prevMeals => prevMeals.concat(meal));
      }
    }
  }

  useEffect(() => {
    sendRequest(modifyLoadedMeals, { url: FIREBASE_DB })
  }, [sendRequest]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Fragment>
      {isLoading && <h2 className={classes.loader}>Loading...</h2>}
      {!isLoading && !error && <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>}
      {error && <h1 className={classes.error}>{error}</h1>}
    </Fragment>
  );
};

export default AvailableMeals;
