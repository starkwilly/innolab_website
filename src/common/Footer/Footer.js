import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import GdprDialog from "../../common/GdprDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYammer } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const gdprDate = localStorage.getItem("gdprDate");
    const [gdprOpen, setGdprOpen] = useState(gdprDate === null);
    

    return (
        <>
            <GdprDialog open={gdprOpen} setOpen={setGdprOpen} />
            <Navbar
                className="footer pt-2 pt-sm-2 pt-md-0"
                expand="md"
                id="contact-us"
            >
                <Container>
                            <span className="contactFooter">
                                Contact Us
                            </span>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse>
                        <Navbar.Text className="mb-1 mb-sm-1 mb-md-0">
                            
                            <span>
                                <a>https://go.accenture.com/innolabsupport</a>
                            </span>
                            <br></br>
                            <span>
                                  <a>innolabapps@accenture.com</a>
                            </span>
                           
                        </Navbar.Text>
                        <Nav className="ml-3 mr-auto footer-links">
                            <Nav.Item>
                                <Nav.Link onClick={()=>{setGdprOpen(true)}}>Terms of Use</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav className="footer-brand">

                        <span className="ml-1">Innolab</span>
                           <Nav.Item className="px-1">
                             <p>Follow us :</p>
                            </Nav.Item>
                            <Nav.Item className="px-1">
                                <FontAwesomeIcon icon={faYammer} size="lg" />
                            </Nav.Item>
                            <Nav.Item className="px-1">
                             <FontAwesomeIcon icon={faYammer} size="lg" />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Footer;
