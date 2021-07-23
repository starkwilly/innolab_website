import React, { useEffect } from "react";

// import { getTokenAndTryAuthenticate } from "../../_store/actions/authenticateActions";
//import { useMsal } from "@azure/msal-react";
//import { EventType } from "@azure/msal-browser";
//import { loginRequest } from "../../_helpers/authConfig";
import { history } from "_helpers/history";
import Spinner from "react-bootstrap/Spinner";

function Startup() {
    // const dispatch = useDispatch();


   // const { instance } = useMsal();
    // const isAuthenticated = useIsAuthenticated();
    //const accounts = instance.getAllAccounts();
    // const account = instance.getActiveAccount();




    useEffect(() => {
        //console.log("Startup: mounted...");

        // handle auth redired/do all initial setup for msal

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
