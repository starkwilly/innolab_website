import React, {  Suspense } from "react";
import { Router, Switch, Redirect } from "react-router-dom";
import { history } from "_helpers/history";
import RouteWithLayout from "../common/RouteWithLayout/RouteWithLayout";
import { Main as MainLayout, Minimal as MinimalLayout } from "../layouts";
import Dashboard from "../views/Dashboard/Dashboard";
import NotFound from "../views/NotFound/NotFound";
import Forbidden from "../views/Forbidden/Forbidden";
import Startup from "../views/Startup/Startup";
import Donwload from '../views/Donwload/Donwload';
import Spinner from "react-bootstrap/Spinner";
import IdeasForm from "../views/IdeasForm/IdeasForm"

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
                        component={Donwload}
                        exact={false}
                        layout={MainLayout}
                        path="/download/:id"
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

                   <RouteWithLayout
                        component={IdeasForm}
                        exact
                        layout={MinimalLayout}
                        path="/add-idea"
                    />

                    <Redirect to="/not-found" />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;
