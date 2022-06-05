import React from 'react';

import Meal from './Meal';
import Card from '../ui/Card';

import classes from './MealsList.module.css';

const DUMMY_MEALS = [
    {
        id: 1,
        title: 'Pizza',
        description: 'Peperoni pizza with cheese and jalapenio pappers.',
        price: 11.99
    },
    
    {
        id: 2,
        title: 'Sushi',
        description: 'Dragon roll.',
        price: 10.99
    }
]

const MealsList = () => {

    const mealItems = DUMMY_MEALS.map(meal => {
        return <Meal
            key={meal.id}
            meal={meal}
        />
    });

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealItems}</ul>
            </Card>
        </section>
    );
}

export default MealsList;