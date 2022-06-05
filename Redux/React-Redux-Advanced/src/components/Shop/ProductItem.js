import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendCartData } from '../../store/action-creators/cart-actions';
import { cartActions } from '../../store/slices/cart-slice';
import { uiActions } from '../../store/slices/ui-slice';


const FIREBASE_DB = 'https://react-http-dff3e-default-rtdb.europe-west1.firebasedatabase.app/cart.json';

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => dispatch(cartActions.addItem({ id, title, price }));
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);


  // THIS IS ONE OF THE TWO APROACHES TO PERFROM SIDE EFFECTS (HTTP CALLS) USING REDUX ... 
  // THE OTHER IS VIA USING  !!!CUSTOM ACTION CREATORS!!! which is defined in cart-slice.js file and in this file above the comments
  // by using useEffect we acomplish that when the cart state maintained by redux is changed(updated) 
  // then the component is re evaluated so we have brand new cart state and so the useEffect run again becouse it founds out that 
  // the new cart and old cart are totaly differnt object in memmory
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(uiActions.showNotification({
  //       status: 'pending',
  //       title: 'Sending',
  //       message: 'Sending cart data!'
  //     }));

  //     const res = await fetch(FIREBASE_DB, {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(cart)
  //     })

  //     if (!res.ok) throw new Error('Something went wrong!');

  //     dispatch(uiActions.showNotification({
  //       status: 'success',
  //       title: 'Success',
  //       message: 'Successfuly send cart data.'
  //     }));
  //   }

  //   if (isInitial) {
  //     setIsInitial(false);
  //     return;
  //   }

  //   sendCartData()
  //     .catch(err => {
  //       dispatch(uiActions.showNotification({
  //         status: 'error',
  //         title: 'Error',
  //         message: 'Sending cart data failed.'
  //       }));
  //     });
  // }, [cart, dispatch]);

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
