import { useState, useEffect } from "react";
const useCounter = (type) => {
    const [counter, setCounter] = useState(0);
    let interval;
    useEffect(() => {
        if (type === '+') {
            interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);
        }
        else {
            interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [type]);

    return counter;
}


export default useCounter;