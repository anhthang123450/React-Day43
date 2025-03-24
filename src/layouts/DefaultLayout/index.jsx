import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const DefaultLayout = () => {
    return (
        <div>
            <Navigation />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default DefaultLayout;
