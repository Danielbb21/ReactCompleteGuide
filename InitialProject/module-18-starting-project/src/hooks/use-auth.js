import { useState } from "react";

const useAuth = (validateInput) => {
    const [enteredData, setEnteredData] = useState('');
    const enteredDataIsValid = validateInput(enteredData);

    const changeDataHandler = (event) => {
        
        setEnteredData(event.target.value);

    };

    return { value: enteredData, onChangeData: changeDataHandler, isValid: enteredDataIsValid };
}

export default useAuth;