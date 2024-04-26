import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const Rotiator = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/maguspocus" />} />
            <Route path="/maguspocus" element={<Sidebar />} />
        </Routes>
    )
}

