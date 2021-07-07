import React, {  Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { history } from "_helpers/history";
import RouteWithLayout from "../common/RouteWithLayout/RouteWithLayout";
import { Main as MainLayout, Minimal as MinimalLayout } from "../layouts";
import Dashboard from "../views/Dashboard/Dashboard";
import NotFound from "../views/NotFound/NotFound";
import Forbidden from "../views/Forbidden/Forbidden";
import Startup from "../views/Startup/Startup";
import Spinner from "react-bootstrap/Spinner";




const Routes = () => {
    return (
        <Router history={history}>
            <Suspense
                fallback={
                    <div
                        className="d-flex justify-content-center align-items-center h-100"
                        style={{ minHeight: "100vh" }}
                    >
                        <Spinner animation="border" variant="dark" />
                    </div>
                }
            >
                <Switch>
                   <RouteWithLayout
                        component={Forbidden}
                        exact
                        layout={MainLayout}
                        path="/downloadables/test.zip"
                    />
                    <RouteWithLayout
                        component={Startup}
                        exact={true}
                        layout={MinimalLayout}
                        path="/"
                    />

                    <RouteWithLayout
                        component={Dashboard}
                        layout={MainLayout}
                        exact={true}
                        path="/dashboard"
                    />

                    <RouteWithLayout
                        component={Forbidden}
                        exact
                        layout={MinimalLayout}
                        path="/forbidden"
                    />

                    <RouteWithLayout
                        component={NotFound}
                        exact
                        layout={MinimalLayout}
                        path="/not-found"
                    />
                    <Redirect to="/not-found" />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;
