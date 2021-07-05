import React from "react";
import PropTypes from "prop-types";
// import { useSelector } from 'react-redux';
import Header from "../../common/Header/Header";
import Footer from "../../common/Footer/Footer";


import { getGlobals , getGlobalsJson } from "../../_services/strapiService";
import Container from "react-bootstrap/Container";
import { useMsal } from "@azure/msal-react";
import { history } from "_helpers/history";

const Main = ({ children }) => {
    const { instance } = useMsal();
   const account = instance.getActiveAccount();

  if (!account) {
    history.push("/");
      return null;
   }
    const fakeUser = { name: "info.firstname", lastname: "info.lastname" };

    const [globalData, setGlobalData] = React.useState(null);
    // PENDING USE STORE
    // const isDataLoading = useSelector((state) => state);

    React.useEffect(() => {
        const getInitialData = async () => {
            const ret = await getGlobals();
            if (ret.data) {
                setGlobalData(ret.data);
            } else {
                // window.log("load data FAILED");
            }
            getGlobalsJson();
        };
        getInitialData();
    }, []);

    return (
        globalData && (
            <>   
                
                <Header user={fakeUser}></Header>
                <Container

                 
                    className="mainContainer  p-0"
                    style={
                        globalData.ImageBg
                            ? {
                                backgroundImage: `url(${process.env.REACT_APP_API}${globalData.ImageBg.url}`,
                            }
                            : {}
                    }
                >
                    {children}
                </Container>
                <Footer />
            </>
        )
    );
};

Main.propTypes = {
    children: PropTypes.node,
};

export default Main;


