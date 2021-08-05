import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
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
                    <h2>Contact us</h2>
                    Our team is more than happy to help you!<br/>Please use the following links to send us an email and we would reach out as soon as possible.
                </span>
                <Container>
                <Row>  
                    <Col>
                        <Row><a className="footerLink" href="mailto:jose.p.jimenez@accenture.com">General Information</a> </Row>  
                        <Row><a  className="footerLink" href="mailto:jorge.clare@accenture.com">Projects</a> </Row>
                        <Row><a className="footerLink" href="mailto:esteban.sancho@accenture.com">Automation</a> </Row>
                        <Row><a className="footerLink" href="https://go.accenture.com/innolabsupport" target="_blank" rel="noopener noreferrer">Services</a> </Row>
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
                        <Row>
                            <Link to="#" className="footerLink" onClick={()=>{setGdprOpen(true)}}>Terms of Use</Link>
                        </Row>         
                        <Row>
                            <a className="footerLink" href="https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiI5NzM5NTgxIn0/all" rel="noopener noreferrer">
                                Follow us: <FontAwesomeIcon icon={faYammer} size="lg" />
                            </a>
                        </Row>
                    </Col>
                </Row>      
                </Container>
            </Navbar>
        </>
    );
};

export default Footer;
