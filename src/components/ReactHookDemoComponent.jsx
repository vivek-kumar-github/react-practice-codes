import { useState, useEffect } from "react"

export default function ReactHookDemoComponent() {
    const [msg, setMsg] = useState()

    function handleSuccessClick() {
        setMsg(<SuccessComponent />)
    }

    function handleErrorClick() {
        setMsg(<ErrorComponent />)
    }

    return (
        <div className="container-fluid">
            <h1>ReactHookDemoComponent</h1>
            <button onClick={handleSuccessClick}>Success</button>
            <button onClick={handleErrorClick}>Invalid</button>
            <div>{msg}</div>
            <hr />
        </div>
    )
}

function SuccessComponent() {
    useEffect(() => {
        console.log("Success component will mount..")
        return (() => {
            console.log("Success component will unmount")
        })
    }, [])

    return (
        <div>
            <h2>Login Success..</h2>
        </div>
    )
}

function ErrorComponent() {
    useEffect(() => {
        console.log("Error component will mount")
        return (() => {
            console.log("Error component will unmount")
        })
    }, [])

    return (
        <div>
            <h2>Invalid credentials..</h2>
        </div>
    )
}