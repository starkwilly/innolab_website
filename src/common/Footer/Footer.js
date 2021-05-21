import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import GdprDialog from "../../common/GdprDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const gdprDate = localStorage.getItem("gdprDate");
    const [gdprOpen, setGdprOpen] = useState(gdprDate === null);
    const currentYear = new Date().getFullYear();

    return (
        <>
            <GdprDialog open={gdprOpen} setOpen={setGdprOpen} />
            <Navbar
                className="footer pt-2 pt-sm-2 pt-md-0"
                expand="md"
                id="contact-us"
            >
                <Container>
                    <img
                        className="mr-1 mr-md-2 mr-lg-5"
                        src={`${process.env.PUBLIC_URL}/static/images/accenture-black.png`}
                        alt="Accenture"
                    />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse>
                        <Navbar.Text className="mb-1 mb-sm-1 mb-md-0">
                            <span>
                                &copy; {currentYear} Accenture. All Rights Reserved.
                            </span>
                        </Navbar.Text>
                        <Nav className="ml-3 mr-auto footer-links">
                            <Nav.Item>
                                <Nav.Link onClick={()=>{setGdprOpen(true)}}>Terms of Use</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="footer-brand">
                            <Nav.Item className="px-1">
                                <FontAwesomeIcon icon={faCoffee} size="lg" />
                                <span className="ml-1">Innolab</span>
                            </Nav.Item>
                            <Nav.Item className="px-1">React code base</Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Footer;
