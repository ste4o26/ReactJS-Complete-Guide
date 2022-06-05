import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Great Quotes</h1>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink
                            to='/quotes'
                            activeClassName='active'>
                            All Quotes
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to='/quotes/add'
                            activeClassName='active'>
                            Add Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;