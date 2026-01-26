import { useState, useEffect } from "react";
import $ from "jquery";

export default function JQueryAjaxDemoComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        $.ajax({
            method: "GET",
            url: "http://localhost:4000/getusers",
            success: (response) => {
                setUsers(response);
            },
            error: (err) => {
                console.error("AJAX Error:", err);
            }
        });
    }, []);

    return (
        <div className="container-fluid">
            <h1>JQueryAjaxDemoComponent</h1>
            <ol>
                {
                    users.map(user =>
                        <li key={user.UserId}>{user.UserName}</li>
                    )
                }
            </ol>
            <hr />
        </div>
    );
}