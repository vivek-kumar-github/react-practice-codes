import { useState } from 'react';

export default function FormValidationComponent() {
    const [existingUsers] = useState(["john_doe", "alice_smith", "admin_user"]);

    const [formData, setFormData] = useState({ userId: "", password: "" });

    const [userStatus, setUserStatus] = useState("");
    const [passStrength, setPassStrength] = useState("");
    const [showUserMsg, setShowUserMsg] = useState(false);
    const [showPassMsg, setShowPassMsg] = useState(false);

    function handleUserChange(e) {
        const val = e.target.value;
        setFormData({ ...formData, userId: val });

        if (existingUsers.includes(val)) {
            setUserStatus("User ID Taken");
        } else if (val.length === 0) {
            setUserStatus("");
        } else {
            setUserStatus("Available");
        }
    }

    function handlePasswordChange(e) {
        const val = e.target.value;
        setFormData({ ...formData, password: val });

        if (val.length === 0) {
            setPassStrength("");
        } else if (val.length < 4) {
            setPassStrength("Poor Password");
        } else if (val.length < 8) {
            setPassStrength("Weak Password");
        } else {
            setPassStrength("Strong Password");
        }
    }

    function handleRegister() {
        alert(`Registration Successful!\nUser ID: ${formData.userId}\nPassword: ${formData.password}`);
    }

    return (
        <div className="container mt-5">
            <div className="card" style={{ maxWidth: "400px" }}>
                <div className="card-header bg-primary text-white text-center">
                    <h3>Register User</h3>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label fw-bold">User ID</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleUserChange}
                            onFocus={() => setShowUserMsg(true)}
                            onBlur={() => setShowUserMsg(false)}
                        />
                        {showUserMsg && (
                            <div className={`mt-1 small ${userStatus === "Available" ? "text-success" : "text-danger"}`}>
                                {userStatus}
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={handlePasswordChange}
                            onFocus={() => setShowPassMsg(true)}
                            onBlur={() => setShowPassMsg(false)}
                        />
                        {showPassMsg && (
                            <div className={`mt-1 small ${passStrength === "Strong Password" ? "text-success" :
                                passStrength === "Weak Password" ? "text-warning" : "text-danger"
                                }`}>
                                {passStrength}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleRegister}
                        className="btn btn-primary w-100 mt-3"
                        disabled={!formData.userId || !formData.password || userStatus === "User ID Taken"}
                    >Register</button>
                </div>
            </div>
            <hr />
        </div>
    )
}