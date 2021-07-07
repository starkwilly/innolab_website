/* eslint-disable no-unused-vars */

import Routes from 'routes/Routes';
import { trace } from './common/DevUtils';

import React, { useState } from "react";

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./_helpers/authConfig";
import Button from "react-bootstrap/Button";

window.debug = process.env.REACT_APP_DEBUG_MODE === 'true' ? true : false;
window.log = trace;

/////////////////////////

function ProfileContent() {
    const { instance, accounts, inProgress } = useMsal();
    const [accessToken, setAccessToken] = useState(null);

    const name = accounts[0] && accounts[0].name;


    
    function RequestAccessToken() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken);
            sessionStorage.setItem('SBtoken', JSON.stringify(response.accessToken));
            console.log(response.accessToken)
            
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken);
                console.log(response.accessToken)
            });
        });
    }

    return (
        <>
            <h5 className="card-title">Welcome {name}</h5>
            {accessToken ? 
                <p>Access Token Acquired!</p>
                :
                <Button variant="secondary" onClick={RequestAccessToken}>Request Access Token</Button>
            }
        </>
    );
}





//////////////////////////////////


const App = () => {

    return (
        <>
            <Routes />
            <ProfileContent></ProfileContent>
        </>
    );
}

export default App;
