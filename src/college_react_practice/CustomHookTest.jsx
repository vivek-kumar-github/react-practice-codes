import useCounter from "../custom_hooks/useCounter";

const CustomHookTest = () => {
    const [increment, decrement, reset, count] = useCounter(0);

    return (
        <>
        <h1>Custome Hook Test</h1>
        <h2>Initial Value: 0</h2>
        <h2>Current Value: {count}</h2>
        <button onClick={() => increment()}>Increment</button>
        <br />
        <button onClick={() => decrement()}>Decrement</button>
        <br />
        <button onClick={() => reset()}>Reset</button>
        </>
    )
}

export default CustomHookTest;