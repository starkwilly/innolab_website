import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
// import { history } from '_helpers/history';

import Container from 'react-bootstrap/Container';

const Main = ({ children }) => {
    /* const info = useSelector(state => state.auth.info);

    if (info === null) {
        history.push('/');
        return null;
    } */

    return (
        <>
            <Header user={{ name: info.firstname, lastname: info.lastname }}></Header>
            <Container className="mainContainer p-0">
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