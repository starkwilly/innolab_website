/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMsal, useIsAuthenticated, useMsalAuthentication, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { EventType, InteractionType, InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "../../_helpers/authConfig";
import { useSelector , useDispatch } from 'react-redux';
import{ setUserInfo } from "_store/actions/authenticateActions"

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  const { login, result, error } = useMsalAuthentication(InteractionType.Redirect, loginRequest);
  const { instance, accounts } = useMsal();
  const { info } = useSelector(state => ({ info: state.auth.info }));
 
    const dispatch = useDispatch();
    // window.log('RouteWithLayout > accounts > ', accounts);
    const isAuthenticated = useIsAuthenticated();
    const [authReady, setAuthReady] = useState(null);

    useEffect(() => {
        window.log('RouteWithLayout > useEffect error > ', error);
        if (error) {
            login(InteractionType.Redirect, loginRequest);
        }
    }, [error]);

    useEffect(() => {
        if (accounts.length > 0 && instance.getActiveAccount() === null) {
            instance.setActiveAccount(accounts[0]);
        }
    }, [accounts]);

    useEffect(() => {
        // window.log('RouteWithLayout > useEffect RESULT > ', isAuthenticated);
        if (isAuthenticated) {
            confirmUser();
        }
    }, [isAuthenticated]);

    function confirmUser() {
        const account = instance.getActiveAccount();
        if (info !== null) {
            if (info.username === account.username) {
            // window.log('confirmUser : SAME AUTH USER');
                setAuthReady(true);
            }
            else{
                setUserAndPermissions(account);
            }
        }else{
            setUserAndPermissions(account);
        }

        return account;
    }

    function setUserAndPermissions(account) {
        const userName = account.name.split(",").map(item => item.trim());
        dispatch(setUserInfo({
            firstname: userName[1],
            lastname: userName[0],
            username: account.username
        }));
        setAuthReady(true);
    }

    const renderRouteComponent = (matchProps) => {
        return <Component {...matchProps} />
    };

  return (
    <>
    { authReady &&
     <>
         <AuthenticatedTemplate>
         <Route
             {...rest}
           render={matchProps => (
            <Layout>
             {renderRouteComponent(matchProps)}
           </Layout>
            )}
         />
         </AuthenticatedTemplate>
         {/* <UnauthenticatedTemplate>
             <p>No users are signed in!</p>
         </UnauthenticatedTemplate> */}
     </>
     }
     </>
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;