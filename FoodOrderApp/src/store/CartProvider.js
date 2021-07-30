import CartContext from './Cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
};
const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updateItems = state.items;
        const names = state.items.map(item => item.name);
        
        const position = names.indexOf(action.value.name)
        if( position > -1){
            updateItems[position].amount += action.value.amount;
            console.log('ja tenho', state.items[position].name,  updateItems[position].amount);
        }
        else{
            console.log('aquiii');
            updateItems.push(action.value);
        }
        console.log(updateItems);
        console.log('total amount', action.value.totalAmount )
        const updateTotalAmount = state.totalAmount + action.value.price;
        
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
      }
    return defaultCartState;
}
const CartProvider = props => {

    const [cartState, dispachCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        console.log('item receaved', item);
        dispachCartAction({ type: 'ADD', value: item });
    }

    const removeItemFromCart = (id) => {
        console.log('idddd', id);
        dispachCartAction({ type: 'REMOVE', id: id });
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;