import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSurprise } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
    useEffect(() => {
        localStorage.removeItem(process.env.REACT_APP_LAST_URL);
        window.log("NF-->mount it!");
    }, []);

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center h-100"
            style={{ minHeight: "100vh" }}
        >
            <FontAwesomeIcon className="mb-3" icon={faSurprise} size="7x" />
            <h4>404 ERROR</h4>
            <p>Sorry! Page not found.</p>
        </div>
    );
};

export default NotFound;
