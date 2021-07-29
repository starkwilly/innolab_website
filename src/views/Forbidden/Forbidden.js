import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";

const Forbidden = () => {
    useEffect(() => {
        localStorage.removeItem(process.env.REACT_APP_LAST_URL);
        window.log("FB-->mount it!");
    }, []);

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center h-100"
            style={{ minHeight: "100vh" }}
        >
            <FontAwesomeIcon className="mb-3" icon={faHandPaper} size="7x" />
            <h4>SORRY! YOU DO NOT HAVE ACCESS TO THIS APP</h4>
            <p>Please check this with your Administrator.</p>
        </div>
    );
};

export default Forbidden;
