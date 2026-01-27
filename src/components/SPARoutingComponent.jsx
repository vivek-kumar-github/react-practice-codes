import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function SPARoutingComponent() {
    return (
        <div className="container-fluid">
            <h1>SPARoutingComponent</h1>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">JavaScript</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="html" element={
                        <main>
                            <h3>HTML</h3>
                            <p>It is a markup language</p>
                        </main>
                    } />
                    <Route path="css" element={
                        <main>
                            <h3>CSS</h3>
                            <p>It defines styles</p>
                        </main>
                    } />
                    <Route path="js" element={
                        <main>
                            <h3>JavaScript</h3>
                            <p>It is a programming language</p>
                        </main>
                    } />
                    <Route path="/" element={
                        <div>
                            <h3>Home</h3>
                            <p>Tutorial Home</p>
                        </div>
                    } />
                    <Route path="*" element={
                        <>
                            <code>Not Found : Page you are looking for is not found</code>
                        </>
                    }
                    />
                </Routes>
            </BrowserRouter>
            <hr />
        </div>
    )
}