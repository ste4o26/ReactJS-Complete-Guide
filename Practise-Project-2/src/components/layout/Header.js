import React, { Fragment } from 'react';

import CartButton from './CartButton';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <CartButton onClick={props.onOpenCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} />
            </div>
        </Fragment>
    );
}

export default Header;