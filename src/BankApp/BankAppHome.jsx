import { Link, Outlet } from "react-router-dom";

export default function BankAppHome() {
    return (
        <>
            <div>
                <h3>Bank Home</h3>
                <nav>
                    <span><Link to="/personal">Personal Banking</Link></span>
                    <span>|</span>
                    <span><Link to="/nri">NRI Banking</Link></span>
                </nav>
                <hr />
                <Outlet />
            </div>
        </>
    )
}