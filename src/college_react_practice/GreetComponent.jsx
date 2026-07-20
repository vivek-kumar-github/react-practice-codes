import { useState } from "react"

export const Greet = () => {
    const [greet, setGreet] = useState("Hello");
    return (
        <>
        <h1>{greet}</h1>
        <input onChange={(e) => {
            setGreet(`hello ${e.target.value}`);
        }}>
        </input>
        </>
    )
}