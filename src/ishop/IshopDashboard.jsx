import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function IshopDashboard() {
    const navigate = useNavigate();
    const [cookies, , removeCookie] = useCookies(["userid"]);
    const [userId, setUserId] = useState();
    const [categories, setCategories] = useState([]);

    async function loadCategories() {
        try {
            const response = await axios.get("http://localhost:4000/getcategories");
            setCategories(response.data);
        } catch (err) {
            console.error("Load Failed : ", err);
        }
    }

    useEffect(() => {
        const currentUserId = cookies["userid"];
        if (!currentUserId) {
            navigate("/login");
        } else {
            setUserId(currentUserId);
            loadCategories();
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
                <h3>Product Categories</h3>
                <ol>{
                    categories.map(category =>
                        <li key={category.category}><Link to={`/products/${category.category}`}>{category.category.toUpperCase()}</Link></li>
                    )
                }
                </ol>
            </div>
        </>
    );
}