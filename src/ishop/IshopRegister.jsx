import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import $ from "jquery";

export default function IshopRegister() {
    const [users, setUsers] = useState([]);
    const [userError, setUserError] = useState("");

    let navigate = useNavigate();

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
            axios.post("http://localhost:4000/registeruser", values)
                .then(() => {
                    alert("Registered Successfully");
                    navigate("/login");
                })
                .catch(err => {
                    console.error(err);
                    alert("Registration failed. Server might be down.");
                });
        }
    });

    useEffect(() => {
        $.ajax({
            method: "GET",
            url: "http://localhost:4000/getusers",
            success: (response) => {
                setUsers(response);
            }
        });
    }, []);

    function verifyUserId(e) {
        const inputId = e.target.value;
        const userFound = users.find(user => user.UserId === inputId);

        if (userFound) {
            setUserError("User ID taken - Try another");
        } else if (inputId === "") {
            setUserError("");
        } else {
            setUserError("User ID available");
        }
    }

    return (
        <div className="container mt-3">
            <div className="card p-4 mx-auto" style={{ maxWidth: '450px' }}>
                <h2>Register New User</h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User Id</dt>
                        <dd>
                            <input type="text" onKeyUp={verifyUserId} value={formik.values.UserId} onChange={formik.handleChange} name="UserId" className="form-control" />
                            <div className={userError === "User ID available" ? "text-success" : "text-danger"}>
                                {userError}
                            </div>
                        </dd>

                        <dt>User Name</dt>
                        <dd><input type="text" value={formik.values.UserName} onChange={formik.handleChange} name="UserName" className="form-control" /></dd>

                        <dt>Password</dt>
                        <dd><input type="password" value={formik.values.Password} onChange={formik.handleChange} name="Password" className="form-control" /></dd>

                        <dt>Age</dt>
                        <dd><input type="number" value={formik.values.Age} onChange={formik.handleChange} name="Age" className="form-control" /></dd>

                        <dt>Mobile</dt>
                        <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile" className="form-control" /></dd>

                        <dt>Subscription</dt>
                        <dd className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="Subscribed"
                                id="Subscribed"
                                checked={formik.values.Subscribed}
                                onChange={e => formik.setFieldValue("Subscribed", e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="Subscribed">Yes</label>
                        </dd>
                    </dl>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                    <br />
                    <Link to="/login">Already have an account?</Link>
                </form>
            </div>
        </div>
    );
}