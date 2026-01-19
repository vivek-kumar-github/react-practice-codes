import { useState, useEffect } from "react"
import { useCookies } from "react-cookie"

export default function CookieDemoComponent() {

    const [cookies, setCookie, removeCookie] = useCookies(['username'])
    const [userDetails, setUserDetails] = useState({ UserName: "", Password: "" })

    function handleUserName(e) {
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }

    function handlePassword(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }

    function handleLogin() {
        setCookie("username", userDetails.UserName, { path: "/", expires: new Date("2026-01-20 20:11") })
        console.log("Login Success..")
    }

    function handleSignOut() {
        removeCookie("username")
        console.log("Signed out successfully..")
    }

    useEffect(() => {
        if (cookies.username == undefined) {
            console.log("Please Login..")
        }
    }, [])

    return (
        <div className="container-fluid">
            <h1>CookieDemoComponent</h1>
            <h3>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={handleUserName} type="text" /></dd>
                <dt>Password</dt>
                <dd><input onChange={handlePassword} type="password" /></dd>
            </dl>
            <button onClick={handleLogin} >Login</button>
            <div>
                <h3>Home <button onClick={handleSignOut} className="btn btn-link">Sign out</button></h3>
                Hello ! {cookies.username}
            </div>
            <hr />
        </div>
    )
}