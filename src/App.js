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






//////////////////////////////////


const App = () => {

    return (
        <>
            <Routes />
    
        </>
    );
}

export default App;
