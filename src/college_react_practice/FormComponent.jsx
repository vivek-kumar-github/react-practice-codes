import { useState } from "react";

export const FormComponent = () => {
    const [tog, setTog] = useState(false);

    return (
        <>
        {tog ? <h1>Dashboard</h1> : <h1>Login Page</h1>}
        <button onClick={ () => {
            {tog ? setTog(false) : setTog(true)}
        }}>
            {tog ? "Logout" : "Login"}
        </button>
        </>
    )
}