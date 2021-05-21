import React from 'react';
import PropTypes from 'prop-types';
import './CardMediaContainer.css';
// import ScrollAnimation from 'react-animate-on-scroll';

const CardMediaContainer = (props) => {
    const {mediaInfo} = props;
    window.log("cardMediaContainer", mediaInfo);

    return (
        // <ScrollAnimation animateIn="fadeIn" className="container cardAboutContainer">
        <ul className="list-group list-group-horizontal">
            {Array(2).fill().map((mediaItm, idx) => (
                <li className="list-group-item media bg-dark" key={idx}>
                    <div className="row">
                        <div className="col">
                        <img src={`${process.env.PUBLIC_URL}/static/images/1x1.png`} className="mr-3" alt="..." width="200px" height="150px"/>{mediaItm}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-right">
                        <   span className="badge badge-secondary">ENG</span>
                        </div>
                    </div>
                    {/* <img src={`${process.env.PUBLIC_URL}/static/images/1x1.png`} className="mr-3" alt="..." width="200px" height="150px"/>{mediaItm} */}
                    {/* <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        <p>All my girls vintage Chanel baby. So you can have your cake. Tonight, tonight, tonight, I&apos;m walking on air. Slowly swallowing down my fear, yeah yeah. Growing fast into a bolt of lightning. So hot and heavy, &apos;Til dawn. That fairy tale ending with a knight in shining armor. Heavy is the head that wears the crown.</p>
                    </div> */}
                    {/* <span className="badge badge-secondary">ENG</span> */}
                </li>
            ))}
        </ul>
        // </ScrollAnimation>
    )
}

CardMediaContainer.propTypes = {
    mediaInfo: PropTypes.any.isRequired,
}

export default CardMediaContainer;