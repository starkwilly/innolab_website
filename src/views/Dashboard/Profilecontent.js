

import React, { useState } from "react";

import {  useMsal } from "@azure/msal-react";
import { loginRequest } from "../../_helpers/authConfig";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

window.debug = process.env.REACT_APP_DEBUG_MODE === 'true' ? true : false;


/////////////////////////

 export default function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState(null);

    const name = accounts[0] && accounts[0].name;
    const {token} = useSelector((state) => ({token:state.auth.token}));

    var SBtoken = sessionStorage.getItem('SBtoken');
 console.log("es esto un token AAAAAAAAAAAAAAAAAAAAAAAAA",token);

  function RequestAccessToken() {
      const request = {
            ...loginRequest,
            account: accounts[0]
        };
      
      instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken);
           sessionStorage.setItem('SBtoken', JSON.stringify(response.accessToken));
            console.log(response.accessToken)
           // let sbToken = sessionStorage.getItem('SbToken');
  
       console.log( "logeando token antes del fecht" + response.accessToken);
                         
        fetch('https://stagingacc03-test.accenture.com/servicebus-dev/api/v1/file/108', {
            method: 'GET',
            headers: { "Content-Type": "application/json",'Authorization': 'Bearer ' + SBtoken},
          })
          .then((response) => response.blob())
          .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
              new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
              'download',
              `dakiri.zip`,
            );    
            // Append to html link element page
            document.body.appendChild(link);
        
            // Start download
            link.click();
        
            // Clean up and remove the link
            link.parentNode.removeChild(link);
          });
            
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken);
                console.log(response.accessToken)
                console.log(e)
            });
        });
    }


    //////////////
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