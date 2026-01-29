import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function IshopDashboard() {
    const navigate = useNavigate();
    const [cookies, , removeCookie] = useCookies(["userid"]);
    const [userId, setUserId] = useState();

    useEffect(() => {
        const currentUserId = cookies["userid"];
        if (!currentUserId) {
            navigate("/login");
        } else {
            setUserId(currentUserId);
        }
    }, [cookies, navigate]);

    function handleSignout() {
        removeCookie("userid", { path: "/" });
        navigate("/login");
    }

    return (
        <>
            <div>
                <h2>
                    User Dashboard {userId} -{" "}
                    <button onClick={handleSignout} className="btn btn-primary">
                        Sign out
                    </button>
                </h2>
            </div>
        </>
    );
}