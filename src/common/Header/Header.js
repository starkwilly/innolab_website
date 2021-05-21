import React from "react";
import PropTypes from "prop-types";
import Scrollchor from 'react-scrollchor'; // *** MODIFIED: node_modules/react-scrollchor/lib/scrollchor.js || "createClass(Scrollchor,..." componentWillReceiveProps and getDerivedStateFromProps removed
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import NewsList from "../NewsList/NewsList";
import "./Header.scss";

const Header = () => {
    return (
        <Navbar className="navbarTop navbar fixed-top" variant="dark">
            <Navbar.Brand><Scrollchor to="#" className="nav-link text-reset"><h2 className="font-weight-bolder pt-2">INNOLAB</h2></Scrollchor></Navbar.Brand>
            
            {/* <NavItem className="ml-auto"><Scrollchor to="#" className="nav-link">Home</Scrollchor></NavItem> */}
            <NavItem className="ml-auto"><NewsList/></NavItem>
            <NavItem><Scrollchor to="#about-us" className="nav-link">About us</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#human-machine" className="nav-link">Human+Machine</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#solutions" className="nav-link">Solutions</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#innovation" className="nav-link">Innovation</Scrollchor></NavItem>
            <NavItem><Scrollchor to="#contact-us" className="nav-link">Contact us</Scrollchor></NavItem>
        </Navbar>
    )
};

Header.propTypes = {
    user: PropTypes.object,
};

export default Header;
