import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import CartContext from '../../store/cart-context';
import useHttp from '../../hooks/use-http';

import classes from './Cart.module.css';

const FIREBASE_DB = 'https://react-http-dff3e-default-rtdb.europe-west1.firebasedatabase.app/orders.json';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [hasOrdered, setHasOrdered] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => cartCtx.removeItem(id);
  const cartItemAddHandler = (item) => cartCtx.addItem(item);
  const toggleCheckoutFormHandler = () => cartCtx.toggleCheckoutFormHandler();

  const { isLoading, error, sendRequest } = useHttp();
  const orderHandler = userData => {
    const options = {
      url: FIREBASE_DB,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { userData, orderedItems: cartCtx.items }
    }

    const res = sendRequest(data => console.log(data), options);
    cartCtx.clear();
    setHasOrdered(true);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  if (isLoading) {
    return (
      <Modal onClose={props.onClose}>
        <h2>Loading...</h2>
      </Modal>
    );
  }

  if (hasOrdered) {
    return (
      <Modal onClose={props.onClose}>
        <h2>We have placed your order successfully!</h2>
      </Modal >
    );
  }

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      < div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>

      {cartCtx.isReadyToOrder && <CheckoutForm onOrder={orderHandler} />}

      {
        !cartCtx.isReadyToOrder && <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button onClick={toggleCheckoutFormHandler} className={classes.button}>Order</button>}
        </div>
      }
    </Modal >
  );
};

export default Cart;
