import React, { useEffect } from "react";
import { /* useDispatch,  */useSelector } from "react-redux";
// import { getTokenAndTryAuthenticate } from "../../_store/actions/authenticateActions";
import { history } from "_helpers/history";
import Spinner from "react-bootstrap/Spinner";

function Startup() {
    // const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.auth.isFetching);

    useEffect(() => {
        const goto_url = localStorage.getItem(process.env.REACT_APP_LAST_URL)
            ? localStorage.getItem(process.env.REACT_APP_LAST_URL)
            : "/dashboard";
        console.log("Startup: mounted...");

        // run on component mount
        // dispatch(getTokenAndTryAuthenticate()).then(() =>
        //     history.push(goto_url)
        // );
        history.push(goto_url);
    }, []);

    return (
        <div>
            {isFetching && (
                <div
                    className="d-flex justify-content-center align-items-center h-100"
                    style={{ minHeight: "100vh" }}
                >
                    <Spinner animation="border" variant="dark" />
                </div>
            )}
        </div>
    );
}

export default Startup;
