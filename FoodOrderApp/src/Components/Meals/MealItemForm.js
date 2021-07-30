import { useRef, useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

const MealItemForm = (props) => {
    const [error, setError] = useState(false);
    const submitHanlder = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setError(true);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    const amountInputRef = useRef();
    return (
        <form onSubmit={submitHanlder}>
            <Input ref={amountInputRef} label="Amount" input={{ id: 'Amount' + Math.random().toString(), type: 'number', min: '1', max: '5', defaultValue: '1' }} />
            <Button type="submit">Add +</Button>
            {error && <p style={{ fontSize: '12px', color: 'red' }}>Please Insert a valid Value</p>}
        </form>
    )
}

export default MealItemForm;