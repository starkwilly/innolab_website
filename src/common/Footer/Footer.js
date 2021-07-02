import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Row, Col} from "react-bootstrap";
import GdprDialog from "../../common/GdprDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYammer } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

//import { Link } from "react-router-dom";


const Footer = () => {
    const gdprDate = localStorage.getItem("gdprDate");
    const [gdprOpen, setGdprOpen] = useState(gdprDate === null);

    

    
    

    return (
        <>
            <GdprDialog open={gdprOpen} setOpen={setGdprOpen} />
           
            <Navbar
                className="footer "
        
                id="contact-us"
            >
                <span className="contactFooter">
                    Our team is more than happy to help you! Please send us an email and we would reach out as soon as possible.
                </span>
                <Container>
                <Row>  
                        <Col>
                            <Row><a className="footerLink" href="mailto:jose.p.jimenez@accenture.com">General Information</a> </Row>  
                            <Row><a  className="footerLink" href="mailto:jorge.clare@accenture.com">Projects</a> </Row>
                            <Row><a className="footerLink" href="mailto:esteban.sancho@accenture.com">Automation</a> </Row>
                            <Row><a className="footerLink" href="https://go.accenture.com/innolabsupport">Services</a> </Row>
                            <Row><a className="footerLink" href="mailto:jose.p.jimenez@accenture.com">Synops</a> </Row>
                        </Col>
                        <Col>
                            <Row><a className="footerLink" href="mailto:rodolfo.soto@accenture.com">One App Experience</a> </Row>
                            <Row><a className="footerLink" href="mailto:g.velez.sanchez@accenture.com">DevOps</a> </Row>
                            <Row><a className="footerLink" href="mailto:esteban.sancho@accenture.com">Synergy Program</a> </Row>
                            <Row><a className="footerLink" href="mailto:david.zuniga@accenture.com">L3AD</a> </Row>
                            <Row><a className="footerLink" href="mailto:david.zuniga@accenture.com">Training / Storytelling</a> </Row>
                        
                        </Col>    
                    <Col>
                    <Link className="footerLink" onClick={()=>{setGdprOpen(true)}}>Terms of Use</Link>             
                    </Col>
                    <Col>
                        <p>Follow us :</p>
                        <Link className="px-1 ">
                            <FontAwesomeIcon icon={faYammer} size="lg" />
                        </Link>
                        <Nav.Item className="px-1">
                            <FontAwesomeIcon icon={faYammer} size="lg" />
                        </Nav.Item>
                    </Col>
                </Row>      
                </Container>
            </Navbar>
        </>
    );
};

export default Footer;
