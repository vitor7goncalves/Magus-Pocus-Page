import { Routes, Route, Navigate } from "react-router-dom";
import { Topbar } from "../components/Topbar";
import { MainTopbar } from "./MainTopbar";

export const Rotiator = () => {
    return (
        <Routes>
            <Route path="/" element={<MainTopbar />} />
            <Route path="/maguspocus" element={<Topbar />} />
        </Routes>
    )
}

//<Route path="/" element={<Navigate to="/maguspocus" />} />