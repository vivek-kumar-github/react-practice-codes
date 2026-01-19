import React, { useContext, useState } from "react";
let UserDetailsContext = React.createContext(null)

export default function ContextDemoComponent() {

    const [userDetails, setUserDetails] = useState({
        UserName: "",
        Email: ""
    })

    function handleUser(e) {
        setUserDetails({
            UserName: e.target.value,
            Email: userDetails.Email
        })
    }

    function handleEmail(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Email: e.target.value
        })
    }

    // function handleSet() {
    //     setUserDetails({
    //         UserName: userDetails.UserName,
    //         Email: userDetails.Email
    //     })
    // }

    return (
        <UserDetailsContext.Provider value={userDetails}>
            <h1>ContextDemoComponent</h1>
            <div className="container-fluid">
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={handleUser} type="text" /></dd>
                    <dt>Email</dt>
                    <dd><input onChange={handleEmail} type="email" /></dd>
                </dl>
                {/* <button onClick={handleSet}>Set Data</button> */}
                <HeaderComponent />
            </div>
            <hr />
        </UserDetailsContext.Provider>
    )
}

function HeaderComponent() {
    let userDetails = useContext(UserDetailsContext)

    return (
        <div className="bg-info text-white" style={{ height: "150px", padding: "10px" }}>
            <h3>Home - {userDetails.UserName}</h3>
            <NavbarComponent />
        </div>
    )
}

function NavbarComponent() {
    let userdetails = useContext(UserDetailsContext)

    return (
        <div className="btn-toolbar bg-dark text-white justify-content-between" >
            <div className="btn-group">
                <button className="btn btn-dark">Amazon</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-dark">{userdetails.Email}</button>
            </div>
        </div>
    )
}