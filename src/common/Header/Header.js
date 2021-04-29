import React from "react";
import PropTypes from "prop-types";
import Scrollchor from 'react-scrollchor'; // *** MODIFIED: node_modules/react-scrollchor/lib/scrollchor.js || "createClass(Scrollchor,..." componentWillReceiveProps and getDerivedStateFromProps removed
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
// import Container from "react-bootstrap/Container";



import "./Header.scss";

const Header = () => {
    return (
        <Navbar className="navbar fixed-top" variant="dark">
            <Navbar.Brand><h2 className="font-weight-bolder pt-2">INNOLAB</h2></Navbar.Brand>
            
            <NavItem className="ml-auto"><Scrollchor to="#" className="nav-link">Home</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#News" className="nav-link">News</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#About us" className="nav-link">About us</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#Products" className="nav-link">Products</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#Services" className="nav-link">Services</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#Innovate" className="nav-link">Innovate</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#Contact us" className="nav-link">Contact us</Scrollchor></NavItem>
        </Navbar>
    )
};

Header.propTypes = {
    user: PropTypes.object,
};

export default Header;
