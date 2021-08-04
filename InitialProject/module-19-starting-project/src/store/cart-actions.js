import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data'
        }));

        const senRequest = async () => {
            const response = await fetch('https://tasks-6afd2-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),

            });
            if (!response.ok) {
                throw new Error('Send cart data failed');
            }
        }
        try {
            await senRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Data sended',
                message: 'Cart data sended'
            }));
        }
        catch (error) {
            sendCartData().catch(error => {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Errpr',
                    message: 'Error in sending cart data'
                }));
            })
        }


    }
}

export const fetchCartData = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch('https://tasks-6afd2-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Failed at fetching data');
            }

            const data = await response.json();

            return data;
            // console.log('data', data.items[0]);
            // dispatch(cartActions.addItemToCart({ id: data.items[0].id, title: data.items[0].title, quantity: data.items[0].quantity, price: data.items[0].price }));
        }

        try {
            const cartData = await sendRequest();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));

        }
        catch (error) {
            sendCartData().catch(error => {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Errpr',
                    message: 'Error in fetching cart data'
                }));
            })
        }
    }
}