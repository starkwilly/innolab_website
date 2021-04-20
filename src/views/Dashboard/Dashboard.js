import React, { lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import DemoSections from './DemoSections';

const Dashboard = () => {
    // TODO: get the gdpr value from the correct source
    const gdprDate = localStorage.getItem("gdprDate");
    const GdprDialog =
        gdprDate === null
            ? lazy(() => import("../../common/GdprDialog"))
            : null;

    return (
        <>
            <Container className="headline">
                <h1 className="mt-1 main-title">
                    Welcome to the Innolab React base with Bootstrap
                </h1>
                <p className="description">
                    You can use this template as a startup for new projects.
                </p>
                <DemoSections />
            </Container>
            <Suspense fallback={<></>}>{GdprDialog && <GdprDialog />}</Suspense>
        </>
    );
};

export default Dashboard;
