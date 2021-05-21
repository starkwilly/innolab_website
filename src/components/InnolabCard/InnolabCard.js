import React from 'react';
import PropTypes from 'prop-types';
import './InnolabCard.css';
import ScrollAnimation from 'react-animate-on-scroll';
import AccordionCard from '../AccordionCard/AccordionCard';
import CardMediaContainer from '../CardMediaContainer/CardMediaContainer';

const InnolabCard = (props) => {
    const {cardInfo, cardId} = props;
    window.log("InnolabCard", cardInfo, cardId);

    return (
        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="ml-3 mr-3">
            <div id={cardId} className="cardBase cardBg card">
                <div className="row no-gutters h-100">
                    <ScrollAnimation className="col-6 h-100 text-center" animateIn='pulse' delay={500} initiallyVisible={true}>
                        <img src={`${process.env.PUBLIC_URL}/static/images/experience_one.svg`} className="h-100 img-fluid"/>
                    </ScrollAnimation>
                    <ScrollAnimation className="col-6" animateIn='fadeIn' delay={800}>
                        <div className="card-body">
                            <h5 className="card-title text-white text-uppercase">{cardInfo.cardTitle}</h5>
                            <p className="card-text">{cardInfo.cardDescription}</p>
                            <p className="card-text"><small className="text-muted">{cardInfo.updated_at}</small></p>
                        </div>
                        <CardMediaContainer mediaInfo={''}/>
                    </ScrollAnimation>
                </div>
                <div className="row no-gutters text-dark p-2">
                        <AccordionCard cardInfo={cardInfo.SubCardSection}/>
                </div>
            </div>
        </ScrollAnimation>
    )
}

InnolabCard.propTypes = {
    cardInfo: PropTypes.any.isRequired,
    cardId: PropTypes.string,
}

export default InnolabCard;