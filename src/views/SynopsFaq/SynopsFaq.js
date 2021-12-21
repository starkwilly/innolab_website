import React, { useState } from "react";
//import Accordion from 'react-bootstrap/Accordion'
//import Button from 'react-bootstrap/Button'  
import video from '../../_assets/fonts/Synops.mp4'
//import Card from 'react-bootstrap/Card';
//import PropTypes from 'prop-types';
//import SynopsAccordionCard from '../SynopsFaq/SynopsAccordion'

import { getSynopsSectionParent } from "../../_services/strapiService";
import Container from 'react-bootstrap/Container'
import Scrollchor from 'react-scrollchor';//used also in header
import SynopsAcordion from '../SynopsAccordion/SynopsAcordion'
import SynopsFaqForm from '../SynopsFaqForm/SynopsFaqForm'
import Spinner from 'react-bootstrap/Spinner'
////import Card from 'react-bootstrap/Card';
//import AccordionContext from 'react-bootstrap/AccordionContext';
//import CardMediaContainer from '../CardMediaContainer/CardMediaContainer';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./SynopsFaq.css"
//import { Link } from 'react-router-dom';
//import ScrollAnimation from 'react-animate-on-scroll';

// eslint-disable-next-line no-unused-vars

function SynopsFaqHeroVideo() {
    return (
        <Container fluid>
            <video autoPlay muted loop id="SynopsVideo">
                <source src={video} type="video/mp4"></source>
            </video>
        </Container>
    )
}

function SynopsFaq() {

    const [cardInfo, setCardInfo] = useState(null);
    const [waitingCardInfo, setWatitingCardInfo] = useState(false);

    // eslint-disable-next-line no-unused-vars
    //var cardInfo = [];

    React.useEffect(() => {
        if (cardInfo === null) {
            getInitialData();
        }
    }, []);

    const getInitialData = async () => {
        setWatitingCardInfo(true);
        const ret = await getSynopsSectionParent();
        if (ret) {

            setCardInfo(ret.data);

        } else {
            console.log('Error');
        }
        setWatitingCardInfo(false);
    }

    return (
        <Container fluid  >
            <Row>
                <Col xs={12} md={12} lg={12} >
                    <SynopsFaqHeroVideo clas></SynopsFaqHeroVideo>
                </Col>
            </Row>
            {(!waitingCardInfo && cardInfo !== null) ? (
                <>
                    <Row>
                        <section className="SectionLinks">
                            {cardInfo.map((cardInfo) => (
                                <>
                                    <Col xs={12} md={12} lg={12}>
                                        <Row>

                                            <Scrollchor to={"#" + cardInfo.SectionTitle} className="text-white text-uppercase"><h3>{cardInfo.SectionTitle}</h3></Scrollchor>

                                        </Row>
                                    </Col>
                                </>
                            ))}
                        </section>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12} className="cardBg" key={cardInfo.id} >
                            {cardInfo.map((cardInfo) => (
                                <>
                                    <Container className="SynopsCard">
                                        <h3 id={cardInfo.SectionTitle} className="SectionTitle w-100 mt-2 text-white text-uppercase">{cardInfo.id + " " + "-" + " "}{cardInfo.SectionTitle}</h3>
                                        <SynopsAcordion key={cardInfo.Position} cardInfo={cardInfo.synops_section_children}></SynopsAcordion>
                                    </Container>
                                </>
                            ))}
                        </Col>
                    </Row>

                </>
            ) : (

                <Row className="pt-3 text-center">
                    <Col xs={12} md={12} lg={12} >
                        <Spinner animation="border" variant="light" />
                    </Col>
                </Row>
            )

            }

            <Row className="SectionSynopsFaqForm">

                <Col xs={12} md={12} lg={12}>
                    <SynopsFaqForm></SynopsFaqForm>
                </Col>

            </Row>
        </Container>
    );
}


export default SynopsFaq;
