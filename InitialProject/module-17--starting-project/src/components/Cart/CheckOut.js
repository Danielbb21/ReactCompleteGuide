import classes from './CheckOut.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityCodeInputRef = useRef();
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = postalCodeInputRef.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const streetIsValid = !isEmpty(enteredStreet);
        const postalCodeIsValid = !isNotFiveChars(enteredPostalCode);
        const cityIsValidy = !isEmpty(enteredCity);
        const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValidy;
        setFormInputValidity({
            name: nameIsValid,
            street: streetIsValid,
            city: cityIsValidy,
            postalCode: postalCodeIsValid
        });

        if (!formIsValid) {
            return;
        }

        props.onUserInfo({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        });
        
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input ref={streetInputRef} type='text' id='street' />
                {!formInputValidity.street && <p>Please enter a valid street!</p>}

            </div>
            <div className={`${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={postalCodeInputRef} type='text' id='postal' />
                {!formInputValidity.postalCode && <p>Please enter a valid postal code!</p>}

            </div>
            <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input ref={cityCodeInputRef} type='text' id='city' />
                {!formInputValidity.city && <p>Please enter a valid city!</p>}

            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onClose}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;