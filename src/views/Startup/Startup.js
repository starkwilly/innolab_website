import React, { useEffect } from "react";

// import { getTokenAndTryAuthenticate } from "../../_store/actions/authenticateActions";
import { useMsal } from "@azure/msal-react";
import { EventType } from "@azure/msal-browser";
import { loginRequest } from "../../_helpers/authConfig";
import { history } from "_helpers/history";
import Spinner from "react-bootstrap/Spinner";

function Startup() {
    // const dispatch = useDispatch();


    const { instance } = useMsal();
    // const isAuthenticated = useIsAuthenticated();
    const accounts = instance.getAllAccounts();
    // const account = instance.getActiveAccount();

    if (accounts.length > 0) {
        instance.setActiveAccount(accounts[0]);
    }

    instance.addEventCallback((event) => {
        if (
            event.eventType === EventType.LOGIN_SUCCESS &&
            event.payload.account
        ) {
            const account = event.payload.account;
            instance.setActiveAccount(account);
        }
    });


    useEffect(() => {
        //console.log("Startup: mounted...");

        // handle auth redired/do all initial setup for msal
        instance
            .handleRedirectPromise()
            // eslint-disable-next-line no-unused-vars
            .then((authResult) => {
                // Check if user signed in
                const account = instance.getActiveAccount();
                const goto_url = localStorage.getItem(
                    process.env.REACT_APP_LAST_URL
                )
                    ? localStorage.getItem(process.env.REACT_APP_LAST_URL)
                    : "/dashboard";

                //console.log('Startup-> auth result: ', authResult);
                //console.log('Startup-> current account: ', account);

                if (!account) {
                    // Redirect to the login flow
                    instance.loginRedirect(loginRequest).catch((e) => {
                        console.error(e);
                    });
                } else {
                    // Get acount and token info???
                    history.push(goto_url);
                }
            })
            .catch((err) => {
                // TODO: Handle errors
                console.log(err);
            });
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
