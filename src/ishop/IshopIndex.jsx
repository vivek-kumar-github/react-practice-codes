import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import IshopHome from "./IshopHome";
import IshopLogin from "./IshopLogin";
import IshopRegister from "./IshopRegister";
import IshopDashboard from "./IshopDashboard";

export default function IshopIndex() {
    return (
        <>
            <div className="container-fluid">
                <header className="bg-danger text-white text-center p-2 mt-2">
                    <h1>Ishop-Online</h1>
                </header>
                <section className="mt-2 row">
                    <CookiesProvider>
                        <BrowserRouter>
                            <nav className="col-3">
                                <div className="mb-2">
                                    <Link className="btn btn-danger w-100" to="/home">Home</Link>
                                </div>
                                <div className="mb-2">
                                    <Link className="btn btn-danger w-100" to="/register">Register</Link>
                                </div>
                                <div className="mb-2">
                                    <Link className="btn btn-danger w-100" to="/login">Login</Link>
                                </div>
                                <div className="mb-2">
                                    <Link className="btn btn-danger w-100" to="/dashboard">Dashboard</Link>
                                </div>
                            </nav>
                            <main className="col-9">
                                <Routes>
                                    <Route path="/" element={<IshopHome />} />
                                    <Route path="home" element={<IshopHome />} />
                                    <Route path="login" element={<IshopLogin />} />
                                    <Route path="register" element={<IshopRegister />} />
                                    <Route path="dashboard" element={<IshopDashboard />} />
                                    <Route path="errorpage" element={
                                        <div>
                                            <h2 className="text-danger">Invalid Credentials</h2>
                                            <Link to="/login">Try Again</Link>
                                        </div>
                                    } />
                                </Routes>
                            </main>
                        </BrowserRouter>
                    </CookiesProvider>
                </section>
            </div>
        </>
    )
}