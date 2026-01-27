import axios from "axios"
import { useState, useEffect } from "react"

export default function AxiosApiGetDemoComponent() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/getusers")
            .then(function (response) {
                setUsers(response.data)
            }).catch(function (ex) {
                console.log(ex)
            })
    }, [])

    return (
        <div className="container-fluid">
            <h1>AxiosApiGetDemoComponent</h1>
            <h3>Users</h3>
            <ol>
                {
                    users.map(user =>
                        <li key={user.UserId}>{user.UserName}</li>
                    )
                }
            </ol>
            <hr />
        </div>
    )
}

//Modern way async await
/*
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosDemo() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Axios returns a Promise, so we can use async/await
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/getusers');
                // Axios puts the server response inside a .data property
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <ul>
            {users.map(user => <li key={user.UserId}>{user.UserName}</li>)}
        </ul>
    );
}
*/