import { BrowserRouter, Route, Routes } from "react-router-dom";
import BankAppHome from "./BankAppHome";
import PersonalLogin from "./Personal/PersonalLogin";
import PersonalRegister from "./Personal/PersonalRegister";
import NriLogin from "./Nri/NriLogin";
import NriRegister from "./Nri/NriRegister";
import PersonalHome from "./Personal/PersonalHome";
import NriHome from "./Nri/NriHome";

export default function MainComponent() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BankAppHome />}>
                        <Route path="personal" element={<PersonalHome />}>
                            <Route path="personallogin" element={<PersonalLogin />} />
                            <Route path="personalregister" element={<PersonalRegister />} />
                        </Route>
                        <Route path="nri" element={<NriHome />}>
                            <Route path="nrilogin" element={<NriLogin />} />
                            <Route path="nriregister" element={<NriRegister />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}