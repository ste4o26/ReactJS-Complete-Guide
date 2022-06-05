import ProductItem from './ProductItem';
import classes from './Products.module.css';

const INITIAL_ITEMS = [
  {
    id: '1',
    title: 'Chair',
    price: 19.99,
    description: 'This is chair - amazing!'
  },

  {
    id: '2',
    title: 'Plant',
    price: 12,
    description: 'Some green stuff.'
  },

  {
    id: '3',
    title: 'Beer',
    price: 1.8,
    description: 'GUINESS!'
  }
];

const Products = (props) => {
  const productItems = INITIAL_ITEMS.map(item => {
    return <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems}
      </ul>
    </section>
  );
};

export default Products;
