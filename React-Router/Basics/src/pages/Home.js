import React from 'react';
import { Route, Link } from 'react-router-dom';

const Home = () => {

    return (
        <section>
            <h1>Home page</h1>
            <Link to='/home/user'>User</Link>
            
            <Route path="/home/user">
                <p>Welcome user</p>
            </Route>
        </section>
    );
}

export default Home;