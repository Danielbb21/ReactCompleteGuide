import { useState } from "react";

const useForm = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;


    const changeValueHandler = (event) => {
        setEnteredValue(event.target.value);

    };

    const reset = () =>{
        console.log('value', enteredValue);
        setEnteredValue('');
        setIsTouched(false);
    }
    const valueInputBlurHandler = (event) => {
        setIsTouched(true);
    };
    return { value: enteredValue, isValid: valueIsValid,hasError, changeValueHandler, valueInputBlurHandler, reset }
}

export default useForm;