import React from 'react';
import PropTypes from 'prop-types';
import RenderMarkdown from '../../common/RenderMarkdown';
import './InnolabCard.css';
import ScrollAnimation from 'react-animate-on-scroll';
import AccordionCard from '../AccordionCard/AccordionCard';
import CardMediaContainer from '../CardMediaContainer/CardMediaContainer';

const InnolabCard = (props) => {
    const {cardInfo, cardId} = props;
    // window.log("InnolabCard", cardInfo, cardId);

    return (
        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="ml-3 mr-3">
            <div id={cardId} className="cardBase cardBg card">
                <div className="row no-gutters h-100">
                    <ScrollAnimation className="col-6 h-100 text-center" animateIn='pulse' delay={500} initiallyVisible={true}>
                        {cardInfo.Image && (
                            <img src={`${process.env.REACT_APP_API}${cardInfo.Image.url}`} className=" img-fluid"/>
                        )}
                    </ScrollAnimation>
                    <ScrollAnimation className="col-6" animateIn='fadeIn' delay={800}>
                        <div className="card-body">
                            <h5 className="card-title text-white text-uppercase">{cardInfo.Title}</h5>
                            <RenderMarkdown className="card-text">{cardInfo.BodyContent}</RenderMarkdown>
                        </div>
                        {(cardInfo.Media.length > 0) && (
                            <CardMediaContainer mediaInfo={cardInfo.Media}/>
                        )}
                    </ScrollAnimation>
                </div>
                <div className="row no-gutters text-dark p-2">
                        <AccordionCard cardInfo={cardInfo.AccordionItems}/>
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