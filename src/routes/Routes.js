import React, { lazy, Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { history } from "_helpers/history";
import RouteWithLayout from "../common/RouteWithLayout/RouteWithLayout";
import { Main as MainLayout, Minimal as MinimalLayout } from "../layouts";
import Dashboard from "../views/Dashboard/Dashboard";
import NotFound from "../views/NotFound/NotFound";
import Forbidden from "../views/Forbidden/Forbidden";
import Spinner from "react-bootstrap/Spinner";

const env = process.env.REACT_APP_ENV;
const Startup = (env === 'local') ? lazy(() => import('../views/Startup/StartupLocal')) : lazy(() => import('../views/Startup/Startup'));

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
