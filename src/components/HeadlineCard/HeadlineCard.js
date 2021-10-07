import React from 'react';
import PropTypes from 'prop-types';
import RenderMarkdown, { parseImgSrc } from '../../common/RenderMarkdown';
import './HeadlineCard.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Container from '../../../node_modules/react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HeadlineCard = (props) => {
    const {cardInfo, cardId} = props;
    // window.log("HeadlineCard", cardInfo, cardId);
    return (
        <Container fluid="xs">
            <Row>
                <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
                   <div id={cardId} className="cardHeadlineBase cardHeadlineBg card "  tabIndex={0}>
                        <div className="row no-gutters h-100">
                            <Col xs={12} md={6} lg={4}  className=" h-100 card-body text-left cardHeadlineHeader">
                                {cardInfo.Title.match(/\b(\w+)(\W*)\b/g).map((headerLine, hidx) => (
                                    <h1 className="display-4 text-uppercase font-weight-bolder" key={hidx}>{headerLine}</h1> 
                                ))}
                            </Col>
                            <Col xs={12} md={6}  lg={3}>
                                <ScrollAnimation className=" h-100 text-center" animateIn='pulse' delay={500} initiallyVisible={true}>
                                    {cardInfo.Image && (
                                        <img src={parseImgSrc(cardInfo.Image.url)} className=" img-fluid"/>
                                    )}
                                </ScrollAnimation>
                            </Col>                            
                            <Col xs={12} md={12}  lg={5}>
                                <div className="card-body ">
                                    <div className="">
                                        <q className=" font-italic font-weight-lighter text-left cardHeadlineQuote">{cardInfo.QuoteText}</q>
                                    </div>
                                    <div className=" pt-1">
                                        <span className="col text-right cardHeadlineSource">— {cardInfo.QuoteSource}</span>
                                    </div>
                                    <div className=" pt-3">
                                        <RenderMarkdown className="col card-text">{cardInfo.CommentsContent}</RenderMarkdown>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </ScrollAnimation>
            </Row>
        </Container>
    )
}

HeadlineCard.propTypes = {
    cardInfo: PropTypes.any.isRequired,
    cardId: PropTypes.string,
}

export default HeadlineCard;