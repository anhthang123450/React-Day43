import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <a href="">Oder</a>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;
