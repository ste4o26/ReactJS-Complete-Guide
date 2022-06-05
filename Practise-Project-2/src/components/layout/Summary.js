import React from 'react';

import classes from './Summary.module.css';

const Summary = () => {

    return (
        <section className={classes.summary}>
            <h2>Delicious food delivered to you!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi.</p>

            <p>repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum!</p>
        </section>
    );
}

export default Summary;