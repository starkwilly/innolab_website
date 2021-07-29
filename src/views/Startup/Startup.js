import React, { useEffect } from "react";
import { history } from "_helpers/history";
import Spinner from "react-bootstrap/Spinner";

function Startup() {

    useEffect(() => {
        //window.log("Startup: mounted...");

        const goto_url = (localStorage.getItem('back_to_url') ? localStorage.getItem('back_to_url') : '/dashboard');

        history.push(goto_url);
       
    }, []);

    return (
        <div
        className="d-flex justify-content-center align-items-center h-100"
        style={{ minHeight: "100vh" }}
       >
        <Spinner animation="border" variant="dark" />
    </div>
    );
}

export default Startup;
