import { LogLevel } from "@azure/msal-browser";

const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0; // Only needed if you need to support the redirect flow in Firefox incognito

export const msalConfig = {

    auth: {
        clientId: `${process.env.REACT_APP_AUTH_CLIENT}`,
        authority: `${process.env.REACT_APP_AUTH_API}`,
        redirectUri: `${process.env.REACT_APP_REDIRECT_URI}`,
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: isIE || isEdge || isFirefox, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                       // console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: [`${process.env.REACT_APP_AUTH_SCOPE}`]
}


// Add the endpoints here for Microsoft Graph API services you'd like to use.
//   export const graphConfig = {
//       graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
//   };