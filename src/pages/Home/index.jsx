import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <FontAwesomeIcon icon={faBell} shake />
        </div>
    );
};

export default Home;
