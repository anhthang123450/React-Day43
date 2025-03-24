import React from "react";
import { Outlet } from "react-router-dom";

const NoFooterLayout = () => {
    return (
        <div>
            <main>
                <header>Header</header>
                <Outlet />
            </main>
        </div>
    );
};

export default NoFooterLayout;
