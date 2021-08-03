import { useState } from "react";


const useInput = (verifyValidation) => {
    const [enteredInput, setEnteredInput] = useState('');
    const inputIsValid = verifyValidation(enteredInput);
    const changeInputHandler = (event) => {
        setEnteredInput(event.target.value);
    };

    const resetInput = () =>{
        setEnteredInput('');
    }

    return { value: enteredInput, onChange: changeInputHandler, isValidy: inputIsValid, reset: resetInput };
};

export default useInput;