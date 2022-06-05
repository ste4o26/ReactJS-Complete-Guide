import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();
    return (
        <article>
            <header>
                <h1>Product Details</h1>
            </header>

            <main>
                <h2>ID: {params.id}</h2>
                <h3>Name: some name</h3>
                <p>price: some price</p>
                <p>description: some description</p>
            </main>
        </article>
    );
}

export default ProductDetails;