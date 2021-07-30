import React, { useEffect,  } from "react";
//import { getTokenAndTryAuthenticate } from "../../_store/actions/authenticateActions";
import { history } from "_helpers/history";
//import { useDispatch, useSelector } from "react-redux";

import Spinner from "react-bootstrap/Spinner";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";

const StartupLocal = () => {
    //const dispatch = useDispatch();
   // const isFetching = useSelector((state) => state.auth.isFetchingToken);
    const goto_url = "/dashboard";
   // const [user, setUser] = useState("");
   // const [userExist, setUserExist] = useState(false);

    useEffect(() => {
        // Clear localStorage to init session with other usr
        /* const user = localStorage.getItem("selectedUser");
        if (user !== null) {
            setUserExist(true);
            window.log("Init User: ", user);
            dispatch(getTokenAndTryAuthenticate())
                .then(() => history.push(goto_url))
                .catch(function (error) {
                    // handle error
                    window.log(error);
                    history.push("/error");
                });
        } */
       // setUserExist(true);
        history.push(goto_url);
    }, []);



 
    return (
        <>
            isFetching || userExist ? (
                <div
                    className="d-flex justify-content-center align-items-center h-100"
                    style={{ minHeight: "100vh" }}
                >
                    <Spinner animation="border" variant="dark" />
                </div>
        
        </>
    );
};

export default StartupLocal;
