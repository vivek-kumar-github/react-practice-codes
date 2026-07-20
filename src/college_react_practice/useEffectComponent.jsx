import { useEffect, useState } from "react";

export const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [loading, setLoading] = useState(true);
    const isStudent = isLoggedIn ?? false;

    const sum = () => {
        return "";
    }

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => {
                    return response.json();
                })
                .then((users) => {
                    console.log("Users", users);
                })
            setLoading(false);
        }, 10000);
    }, [isLoggedIn]);

    return (
        <>
            {isLoggedIn ? <h1>Dashboard</h1> : <h1>Login Page</h1>}
            <button
                onClick={() => {
                    setIsLoggedIn(!isLoggedIn);
                }}
            >Log...</button>
        </>
    )

}