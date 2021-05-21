import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './AccordionCard.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionContext from 'react-bootstrap/AccordionContext';

const Toggler = ({eventKey}) => {
    const isCurrentEventKey = useContext(AccordionContext) === eventKey;
    return (
        <div className="AccordionTggler col-2 text-right">{isCurrentEventKey ? "- Close" : "+ Expand"}</div>
    )
}
Toggler.propTypes = {
    eventKey: PropTypes.string,
}

const AccordionCard = (props) => {
    const {cardInfo, cardId} = props;
    window.log("AccordionCard", cardInfo, cardId);

    return (
        <Accordion className="w-100 mt-2 text-white" /* defaultActiveKey="0" */>
            {cardInfo.map((accordionItm, idx) => (
                <Card className="AccordionCardItem mt-2 rounded" key={idx}>
                    <Accordion.Toggle as={Card.Header} className="row p-3" eventKey={`${idx}`}><h3 className="col-10 text-uppercase">{accordionItm.subCardSectionTitle}</h3><Toggler eventKey={`${idx}`}/></Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${idx}`}>
                        <Card.Body>
                            <div className="row no-gutters">
                                <div className="col-6">
                                    <img src={`${process.env.PUBLIC_URL}/static/images/ems_illu.svg`} className="h-100 img-fluid  mx-auto d-block"/>
                                </div>
                                <Card.Text className="col-6">{accordionItm.SubCardSectionText}</Card.Text>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
    )
}

AccordionCard.propTypes = {
    cardInfo: PropTypes.any.isRequired,
    cardId: PropTypes.string,
}

export default AccordionCard;