import React from 'react';
// Using Link component prevents default browser actions and dont refresh the page every time when i navigate from page to page
// This way i dont lose the state that has been saved for the single page application!!!
// Link is treated as 'a' tag while aplying styles
// NavLink is the same as Link with the difference that we can set an activeClassName prop which sets a className on the clicked(active) link
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;