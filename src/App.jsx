import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollTop from "./hooks/useScrollTop";
import AppRoutes from "./components/AppRoutes";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <ScrollTop />
            <AppRoutes />
        </BrowserRouter>
    );
}

export default App;
