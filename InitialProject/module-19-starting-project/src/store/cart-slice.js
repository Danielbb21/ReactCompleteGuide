import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    totalQuantity: 0,

}
const cartSlice = createSlice({
    name: 'cart-slice',
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({ itemId: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, title: newItem.title });
            } else {
                existingItem.totalQuantity += newItem.totalQuantity;

            }
        },

        removeCartFromCart() { }
    }
});

export default cartSlice;