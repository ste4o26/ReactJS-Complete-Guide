import React, { Fragment } from "react";

import Summary from '../layout/Summary';
import MealsList from './MealsList';

const Meals = () => {
    return (
        <Fragment>
            <Summary />
            <MealsList />
        </Fragment>
    );
}

export default Meals;