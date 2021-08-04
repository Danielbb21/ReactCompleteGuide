import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const qtdItems = useSelector(state => state.cart.totalQuantity);

  const handleShowCart = () => {
    props.showCart();
  };

  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{qtdItems}</span>
    </button>
  );
};

export default CartButton;
