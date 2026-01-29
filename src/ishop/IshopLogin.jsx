import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function IshopLogin() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [, setCookie] = useCookies(["userid"]);

    const formik = useFormik({
        initialValues: {
            UserId: "",
            Password: "",
        },
        onSubmit: (values) => {
            const user = users.find(
                (u) => u.UserId === values.UserId && u.Password === values.Password
            );

            if (user) {
                setCookie("userid", user.UserId, { path: "/" });
                navigate("/dashboard");
            } else {
                navigate("/errorpage");
            }
        },
    });

    useEffect(() => {
        axios
            .get("http://localhost:4000/getusers")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch users", error);
            });
    }, []);

    return (
        <>
            <div>
                <h2>User Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <dl>
                        <dt>User Id</dt>
                        <dd>
                            <input
                                value={formik.values.UserId}
                                name="UserId"
                                onChange={formik.handleChange}
                                type="text"
                            />
                        </dd>
                        <dt>Password</dt>
                        <dd>
                            <input
                                value={formik.values.Password}
                                name="Password"
                                onChange={formik.handleChange}
                                type="password"
                            />
                        </dd>
                    </dl>
                    <button className="btn btn-primary">Login</button>
                </form>
                <br />
                <Link to="/register">New user</Link>
            </div>
        </>
    );
}