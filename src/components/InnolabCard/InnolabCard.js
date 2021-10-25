/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger-with-children */
import {React, useState, useEffect} from 'react';
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

    var iframe_desktop = '<iframe id="kmsembed-1_m0g4bvy3" width="608" height="456" src="https://mediaexchange.accenture.com/embed/secure/iframe/entryId/1_m0g4bvy3/uiConfId/27188232" class="kmsembed" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" referrerPolicy="no-referrer-when-downgrade"  frameborder="0" title="Kaltura Player"></iframe>'
    var iframe_mobile = '<iframe id="kmsembed-1_m0g4bvy3" width="304" height="228" src="https://mediaexchange.accenture.com/embed/secure/iframe/entryId/1_m0g4bvy3/uiConfId/27188232" class="kmsembed" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" referrerPolicy="no-referrer-when-downgrade"  frameborder="0" title="Kaltura Player"></iframe>'

    // Hook
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
             // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }

    const size = useWindowSize();
    var iframe = iframe_desktop;
    if (size.width < 400) {
        iframe = iframe_mobile;
    }
    
    iframe.replace("class=","className=");
    iframe.replace("allowfullscreen","allowFullScreen")
    iframe.replace("frameborder","frameBorder");

    function showModal() {
        var aux = window.open("https://mediaexchange.accenture.com/");        
        if(aux.document.readyState === 'complete') {            
            handleShow();
            aux.close();            
        }        
        
    }
    
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
                                    {(cardInfo.Media.length > 0) && (
                                        <Button variant="primary" onClick={showModal}>
                                            Launch demo modal
                                        </Button>                                                                                                                                                
                                    )}                                    
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
                    <div dangerouslySetInnerHTML={{__html:iframe}}></div>                                         
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