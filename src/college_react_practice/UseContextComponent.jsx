import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const { useState, StrictMode } = require("react")

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    return (
        <>
        <ThemeContex.Provider value = {{theme, setTheme}}>
            {children}
        </ThemeContex.Provider>
        </>
    );
};

export default ThemeProvider;

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
            
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
)