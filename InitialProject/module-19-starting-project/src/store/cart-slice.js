import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';

const initialCartState = {
    items: [],
    totalQuantity: 0,
    changed: false
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {

            const newItem = action.payload;


            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                console.log('não existe');
                state.items.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title });
            } else {
                console.log('existe');
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;

            }
        },

        removeCartFromCart(state, action) {
            const itemToBeRemoved = action.payload;
            const existingItem = state.items.find(item => item.id === itemToBeRemoved.id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
                existingItem.totalPrice -= itemToBeRemoved.price;
            }
            else {
                state.items = state.items.filter((item) => item.id !== existingItem.id);

            }
        }
    }
});



export const cartActions = cartSlice.actions;
export default cartSlice;