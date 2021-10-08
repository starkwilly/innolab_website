import {React, useState} from 'react';
import PropTypes from 'prop-types';
import RenderMarkdown, { parseImgSrc } from '../../common/RenderMarkdown';
import './InnolabCard.css';
import ScrollAnimation from 'react-animate-on-scroll';
import AccordionCard from '../AccordionCard/AccordionCard';
import Container from '../../../node_modules/react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Modal, Button } from 'react-bootstrap';

const InnolabCard = (props) => {
    const {cardInfo, cardId, bgImage} = props;
    // window.log("InnolabCard", cardInfo, cardId);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Container fluid="xs" >
            <Row className="mb-5">
    
                <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="bg-blur ml-lg-3 mr-lg-3">
                    <div id={cardId} className="cardBase cardBg card" style={{backgroundImage: `url(${parseImgSrc(bgImage)})`}} tabIndex={0}>
                        <div className="row no-gutters h-100">
                            <Col xs={12} md={4}>
                                <ScrollAnimation className=" h-100 text-center" animateIn='pulse' delay={500} initiallyVisible={true}>
                                    {cardInfo.Image && (
                                        <img src={parseImgSrc(cardInfo.Image.url)} className=" img-fluid"/>
                                    )}
                                </ScrollAnimation>
                            </Col>
                            <Col xs={12} md={8}>
                                <ScrollAnimation className="" animateIn='fadeIn' delay={800}>
                                    <div className="card-body">
                                        <h5 className="card-title text-white text-uppercase">{cardInfo.Title}</h5>
                                        <RenderMarkdown className="card-text">{cardInfo.BodyContent}</RenderMarkdown>
                                    </div>
                                    <Button variant="primary" onClick={handleShow}>
                                        Launch demo modal
                                    </Button>                                                                                                                                                
                                </ScrollAnimation>
                            </Col>
                        </div>
                        
                        <div className="row no-gutters text-dark p-2">
                                <AccordionCard cardInfo={cardInfo.AccordionItems}/>
                        </div>
                    </div>
                </ScrollAnimation>
            </Row>

            <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="modalWidth">                
                <Modal.Body>
                <iframe id="kmsembed-1_kzqrixnc" width="608" height="456" src="https://mediaexchange.accenture.com/embed/secure/iframe/entryId/1_kzqrixnc/uiConfId/27188232" className="kmsembed" allow="autoplay *; fullscreen *; encrypted-media *" referrerPolicy="no-referrer-when-downgrade"  frameBorder="0" title="Kaltura Player"></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>                
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

InnolabCard.propTypes = {
    cardInfo: PropTypes.any.isRequired,
    cardId: PropTypes.string,
    bgImage: PropTypes.string,
}

export default InnolabCard;