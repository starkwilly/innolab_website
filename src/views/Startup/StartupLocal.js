import React, { useEffect, useState } from "react";
import { getTokenAndTryAuthenticate } from "../../_store/actions/authenticateActions";
import { history } from "_helpers/history";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const StartupLocal = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector((state) => state.auth.isFetchingToken);
    const goto_url = "/dashboard";
    const [user, setUser] = useState("");
    const [userExist, setUserExist] = useState(false);

    useEffect(() => {
        // Clear localStorage to init session with other usr
        const user = localStorage.getItem("selectedUser");
        if (user !== null) {
            setUserExist(true);
            console.log("Init User: ", user);
            dispatch(getTokenAndTryAuthenticate())
                .then(() => history.push(goto_url))
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    history.push("/error");
                });
        }
    }, []);

    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handleLogin = () => {
        localStorage.setItem("selectedUser", user);

        dispatch(getTokenAndTryAuthenticate())
            .then(() => {
                console.log("GOTO URL: ", goto_url);
                history.push(goto_url);
            })
            .catch(function (error) {
                console.log(error);
                history.push("/error");
            });
    };

    return (
        <>
            {isFetching || userExist ? (
                <div
                    className="d-flex justify-content-center align-items-center h-100"
                    style={{ minHeight: "100vh" }}
                >
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <div
                    className="d-flex justify-content-center align-items-center h-100"
                    style={{ minHeight: "100vh" }}
                >
                    <Form>
                        <Form.Group controlId="formBasicUser">
                            <Form.Control
                                type="text"
                                value={user}
                                placeholder="Enter user"
                                onChange={handleUserChange}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleLogin}>
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
        </>
    );
};

export default StartupLocal;
