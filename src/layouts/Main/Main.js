import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
// import { history } from '_helpers/history';

import { getGlobals } from "../../_services/strapiService";

import Container from 'react-bootstrap/Container';

const Main = ({ children }) => {
    /* const info = useSelector(state => state.auth.info);

    if (info === null) {
        history.push('/');
        return null;
    } */
    const fakeUser = { name: 'info.firstname', lastname: 'info.lastname' };

    const [globalData, setGlobalData] = React.useState(null);
    // PENDING USE STORE
    // const isDataLoading = useSelector((state) => state);

    React.useEffect(() => {
        const getInitialData = async () => {
            const ret = await getGlobals();
            if (ret.data) {
                setGlobalData(ret.data);
            }else{
                // window.log("load data FAILED");
            }
        }
        getInitialData();
    }, []);

    return (
        globalData &&
        <>
            <Header user={fakeUser}></Header>
            <Container className="mainContainer p-0" style={(globalData.ImageBg) ? {backgroundImage:`url(${process.env.REACT_APP_API}${globalData.ImageBg.url}`} : {}}>
                {children}
            </Container>
            <Footer />
        </>
    );
};

Main.propTypes = {
    children: PropTypes.node
};

export default Main;