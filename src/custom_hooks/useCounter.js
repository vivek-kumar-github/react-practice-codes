import { useState } from "react";

const useCounter = (initialValue) => {
    const [count, setCount] = useState();

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
    return [increment, decrement, reset, count];
    
};

export default useCounter;