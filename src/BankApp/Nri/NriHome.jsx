import { Link, Outlet } from "react-router-dom";

export default function NriHome() {
    return (
        <>
            <div>
                <h3>NRI Home</h3>
                <ul>
                    <li><Link to="nrilogin">Login</Link></li>
                    <li><Link to="nriregister">Register</Link></li>
                </ul>
                <hr />
                <Outlet />
                <br />
                <div>
                    <Link to="/nri">Back to Main</Link>
                </div>
            </div>
        </>
    )
}