import React from 'react';
import PropTypes from 'prop-types';
import './AboutUs.css';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutUs = (props) => {
    const {cardInfo, cardId} = props;
    // console.log(cardInfo);

    return (
        <ScrollAnimation animateIn="fadeIn" className="container cardAboutContainer">
            <div id={cardId} className="cardAboutSpacer">
                <div className="cardAboutBase cardAboutBg card text-white mx-auto p-4 w-75">
                    <div className="row no-gutters">
                        <div className="col card-body text-left">
                            <h2 className="card-title text-white text-uppercase font-weight-bolder" >{cardInfo.header}</h2> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row card-body ">
                                <span className="card-text">{cardInfo.content}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col badge text-wrap text-white bg-dark text-left p-2 mt-4">
                            <p className="h5 text-uppercase font-weight-bolder" >{cardInfo.tile}</p> 
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