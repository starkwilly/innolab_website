import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RenderMarkdown, { parseImgSrc } from '../../common/RenderMarkdown';
import './AccordionCard.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionContext from 'react-bootstrap/AccordionContext';
import CardMediaContainer from '../CardMediaContainer/CardMediaContainer';
import Container from '../../../node_modules/react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Toggler = ({eventKey}) => {
    const isCurrentEventKey = useContext(AccordionContext) === eventKey;
    return (
        <div className="AccordionTggler col-2 text-right">
            {isCurrentEventKey ? 
                <FontAwesomeIcon icon={faAngleUp} size="lg" /> : 
                <FontAwesomeIcon icon={faAngleDown} size="lg" />
            }
        </div>
    )
}

Toggler.propTypes = {
    eventKey: PropTypes.string,
}

const AccordionCard = (props) => {
    const {cardInfo} = props;
    // window.log("AccordionCard", cardInfo, cardId);

    return (
        <Container fluid >
        
        <Accordion className="w-100 mt-2 text-white" /* defaultActiveKey="0" */>
            {cardInfo.map((accordionItm, idx) => (
                <Card className="AccordionCardItem mt-2 rounded" key={idx}>
                    <Accordion.Toggle as={Card.Header} className="row p-3" eventKey={`${idx}`}><h3 className="col-10 text-uppercase">{accordionItm.Title}</h3><Toggler eventKey={`${idx}`}/></Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${idx}`}>
                      
                        <Card.Body>
                            
                                <Row className="no-gutters">
                                    <Col xs={12} md={6} lg={6}>
                                    {accordionItm.Image && (
                                        <img src={parseImgSrc(accordionItm.Image.url)} className="img-fluid  mx-auto d-block"/>
                                    )}
                                    </Col>
                                    <Col xs={12} md={12} lg={6} className="card-text">
                                        <RenderMarkdown >{accordionItm.BodyContent}</RenderMarkdown>
                                        {(accordionItm.Media.length > 0) && (
                                            <CardMediaContainer mediaInfo={accordionItm.Media}/>
                                        )}
                                    </Col>
                                </Row>
                            
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
                
        </Container>
    )
}

AccordionCard.propTypes = {
    cardInfo: PropTypes.any.isRequired,
}

export default AccordionCard;