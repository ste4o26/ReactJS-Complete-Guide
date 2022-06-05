import { Fragment, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCart } from './store/action-creators/cart-actions';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.ui.isOpen);
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Fragment>
      {
        notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {isOpen && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
