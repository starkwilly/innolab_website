import React from 'react';
import PropTypes from 'prop-types';
import './HeadlineCard.css';
import ScrollAnimation from 'react-animate-on-scroll';

const HeadlineCard = (props) => {
    const {cardInfo, cardId} = props;
    window.log("HeadlineCard", cardInfo, cardId);

    return (
        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
            <div id={cardId} className="cardHeadlineBase cardHeadlineBg card p-4" style={{backgroundImage:`url(${process.env.PUBLIC_URL}/static/images/logo.svg)`}}>
                <div className="row no-gutters h-100">
                    <div className="col-6 h-100 card-body text-left cardHeadlineHeader">
                        {cardInfo.sectionTitle.split('|').map((headerLine, hidx) => (
                           <h1 className="display-4 text-uppercase font-weight-bolder" key={hidx}>{headerLine}</h1> 
                        ))}
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">
                        <div className="card-body ">
                            <div className="row">
                                <q className="col font-italic font-weight-lighter text-left cardHeadlineQuote">{cardInfo.sectionDescription}</q>
                            </div>
                            <div className="row pt-1">
                                <span className="col text-right cardHeadlineSource">— {cardInfo.sectionDescription2}</span>
                            </div>
                            <div className="row pt-3">
                                <span className="col card-text">{cardInfo.sectionDescription3}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

HeadlineCard.propTypes = {
    cardInfo: PropTypes.any.isRequired,
    cardId: PropTypes.string,
}

export default HeadlineCard;