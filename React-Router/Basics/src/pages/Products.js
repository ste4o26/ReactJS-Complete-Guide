import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <header>
                <h1>Products page.</h1>
            </header>

            <main>
                <ul>
                    <li>
                        <Link to="/products/1">Product 1</Link>
                    </li>
                    <li>
                        <Link to="/products/2">Product 2</Link>
                    </li>
                    <li>
                        <Link to="/products/3">Product 3</Link>
                    </li>
                </ul>
            </main>
        </section>
    );
}

export default Products;