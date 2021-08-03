import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CheckOut from './CheckOut';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isSubmiting, setIsSubbmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [showForm, setShowForm] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

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

  const orderMealHandler = async () => {

    setShowForm(true);
  }


  const submitOrder = async (userData) => {

    const userOrderData = { items: cartCtx.items, user: userData };

    try {
      setIsSubbmiting(true);
      const response = await fetch('https://tasks-6afd2-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify(userOrderData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Sommeting went wrong');
      }
      const data = await response.json();
      console.log(data);
      setIsSubbmiting(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    }
    catch (err) {
      console.log(err.message);
    }

  }


  const cartModalContent = (<>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {showForm && <CheckOut onUserInfo={submitOrder} onClose={props.onClose} />}
    <div className={classes.actions}>
      {!showForm && <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>}
      {hasItems && !showForm && <button onClick={orderMealHandler} className={classes.button}>Order</button>}
    </div>
  </>);
  const isSubmittingModalContent = <p>Sendding order Data...</p>
  const didSubmitiModalContent = (
    <>
      <h1>Order Sended</h1>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmiting && !didSubmit && cartModalContent}
      {isSubmiting && isSubmittingModalContent}
      {didSubmit && didSubmitiModalContent}
    </Modal>
  );
};

export default Cart;
