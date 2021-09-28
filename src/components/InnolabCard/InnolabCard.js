import React from 'react';
import PropTypes from 'prop-types';
import RenderMarkdown, { parseImgSrc } from '../../common/RenderMarkdown';
import './InnolabCard.css';
import ScrollAnimation from 'react-animate-on-scroll';
import AccordionCard from '../AccordionCard/AccordionCard';
import CardMediaContainer from '../CardMediaContainer/CardMediaContainer';
import Container from '../../../node_modules/react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const InnolabCard = (props) => {
    const {cardInfo, cardId, bgImage} = props;
    // window.log("InnolabCard", cardInfo, cardId);

    return (
        <Container fluid="xs">
            <Row className="mb-5">
             
                <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="bg-blur ml-3 mr-3">
                    <div id={cardId} className="cardBase cardBg card" style={{backgroundImage: `url(${parseImgSrc(bgImage)})`}} >
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
                                        

                                            <CardMediaContainer mediaInfo={cardInfo.Media}/>
                                        
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
        </Container>
    )
}

InnolabCard.propTypes = {
    cardInfo: PropTypes.any.isRequired,
    cardId: PropTypes.string,
    bgImage: PropTypes.url,
}

export default InnolabCard;