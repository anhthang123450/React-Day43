import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Header/Navigation";
import HandleLogout from "./Header/HanldeLogout";

const DefaultLayout = () => {
    return (
        <div>
            <Navigation />
            <HandleLogout />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DefaultLayout;
