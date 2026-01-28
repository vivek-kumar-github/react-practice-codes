import { useState, useEffect } from "react";
import $ from "jquery";
import { useFormik } from "formik";

export default function AjaxJqueryApiUserRegister() {
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState("")

    const formik = useFormik({
        initialValues: {
            UserId: "",
            UserName: "",
            Password: "",
            Age: 0,
            Mobile: "",
            Subscribed: false,
        },
        onSubmit: values => {
            $.ajax({
                method: "POST",
                url: "http://localhost:4000/registeruser",
                data: values
            })
            alert("Registered successfully")
        }
    })

    useEffect(() => {
        $.ajax({
            method: "GET",
            url: "http://localhost:4000/getusers",
            success: function (response) {
                setUsers(response)
            }
        })
    }, []);

    function verifyUserId(e) {
        for (let user of users) {
            if (user.UserId == e.target.value) {
                setUserError("User ID taken - Try another")
                break
            } else {
                setUserError("User ID available")
            }
        }
    }

    return (
        <div className="container-fluid">
            <h1>AjaxJqueryApiUserRegister</h1>
            <h3>Register User</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onKeyUp={verifyUserId} value={formik.values.UserId} onChange={formik.handleChange} name="UserId" /></dd>
                    <dd>{userError}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" value={formik.values.Age} onChange={formik.handleChange} name="Age" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile" /></dd>
                    <dt>Subscription</dt>
                    <dd className="form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name="Subscribed"
                            checked={formik.values.Subscribed}
                            onChange={e => formik.setFieldValue("Subscribed", e.target.checked)}
                        />{" "}
                        Yes
                    </dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
            <hr />
        </div>
    );
}