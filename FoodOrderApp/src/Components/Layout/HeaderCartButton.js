import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css'

const HeadeCartButton = props => {

    const [btnAnimated, setBtnAnimated] = useState(false);
    const onHanclerShowCart = () => {
        props.onShowCart();
    }
    const ctx = useContext(CartContext);
    const numberOfItems = ctx.items.reduce((curentNumber, item) => {
        return curentNumber + item.amount;
    }, 0);

    useEffect(() => {
        console.log('change', ctx);
        console.log('CHANGEEEEEEEfefefer');
        if (ctx.items.length > 0) {
            setBtnAnimated(true);
        }
       const timer =  setTimeout(()=>{
            setBtnAnimated(false);
        },300);

        return(()=>{
            clearTimeout(timer);
        })
    }, [ctx.totalAmount])
    const btnClasses = `${styles.button} ${btnAnimated ? styles.bump : ''}`;
    return (
        <button onClick={onHanclerShowCart} className={btnClasses}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfItems}
            </span>
        </button>

    );
}

export default HeadeCartButton;