import React from 'react';
import PropTypes from 'prop-types';
import RenderMarkdown from '../../common/RenderMarkdown';
import './AboutUs.css';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutUs = (props) => {
    const {cardInfo, cardId} = props;
    // window.log("AboutUs", cardInfo, cardId);

    return (
        <ScrollAnimation animateIn="fadeIn" className="container cardAboutContainer">
            <div id={cardId} className="cardAboutSpacer">
                <div className="cardAboutBase cardAboutBg card text-white mx-auto ">
                    <div className="row no-gutters">
                        <div className="col card-body text-left">
                            <h2 className="card-title text-white text-uppercase font-weight-bolder" >{cardInfo.Title}</h2> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row card-body ">
                                <RenderMarkdown className="card-text">{cardInfo.BodyContent}</RenderMarkdown>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col badge text-wrap text-white bg-dark text-left p-2 mt-2">
                            <RenderMarkdown className="h5 font-weight-bolder">{cardInfo.TitleContent}</RenderMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

AboutUs.propTypes = {
    cardInfo: PropTypes.any.isRequired,
    cardId: PropTypes.string,
}

export default AboutUs;