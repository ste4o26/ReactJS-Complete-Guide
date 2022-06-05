import { uiActions } from "../slices/ui-slice";
import { cartActions } from "../slices/cart-slice";

const FIREBASE_DB = 'https://react-http-dff3e-default-rtdb.europe-west1.firebasedatabase.app/cart.json';

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const res = await fetch(FIREBASE_DB, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cart)
            })

            if (!res.ok) throw new Error('Something went wrong!');

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Successfuly send cart data.'
            }));
        }

        try {
            await sendRequest();
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed.'
            }));
        }
    }
}


export const fetchCart = () => {
    return async dispatch => {
        const fetchData = async () => {
            const res = await fetch(FIREBASE_DB);
            if (!res.ok) throw new Error('Something went wrong with fetching the cart!');
            const data = res.json();
            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.updateCart(cartData));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed.'
            }));
        }
    }
}