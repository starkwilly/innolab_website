import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { parseImgSrc } from '../../common/RenderMarkdown';
import "./Hero.css";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import LightbulbIcon from 'components/LightbulbIcon';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Hero = (props) => {
    const {data} = props;

    /**
     * @returns JSX render button
     */
    const IdeasCTA = () => {
        return (
            <Link to="/add-idea">
                <Button tabIndex={-1}>
                    <LightbulbIcon width={20} height={20} />
                    Idea
                </Button>
            </Link>
        );
    }

    const css = `@media (max-width: 799px) {
        .bg-image {
            background-image: none;
        }
    }
    @media (min-width: 799px) {
        .bg-image {
            background-image: url(${parseImgSrc(data.ImageBg.url)});
        }
    }`;
    
    return (
        <>
        <style scoped>{css}</style>
        <Container className="px-0">
        <Row  className="jumbotron text-white p-4 container-fluid mx-0 bg-image">
            <div className="w-100 pt-5">
                <h1 className="display-4 text-uppercase font-weight-bolder">
                    <p>
                        Unleash
                        <br/>your best
                        <br/>through
                        <br/>
                        <span className="outstanding-title position-relative">
                            <svg className="blur-font" width="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(97)">
                                    <stop stopColor="#a442ff" offset="10%" stopOpacity="1"/>
                                    <stop stopColor="#000" offset="35%" stopOpacity="0"/>
                                    <stop stopColor="#00e1ff" offset="50%" stopOpacity="1"/>
                                    <stop stopColor="#ff0000" offset="80%" stopOpacity=".7"/>
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="50" fontFamily="Graphik Web" fontSize="3.5rem" fontWeight="900" strokeWidth="5" stroke="url(#gradient)" fill="none">innovation</text>
                                </g>
                            </svg>
                            <span className="outstandingFont">innovation</span>
                        </span>
                    </p>
                </h1>
                {/* <div>
                    <p>
                        That&apos;s our motto.
                        <br/>We don&apos;t see innovation as our end, but the means.
                    </p>
                </div> */}
            </div>
        </Row>

        
            <Row>
                <Col className="fixed-bottom ideasCta">  
                    <IdeasCTA/>
                </Col>
            </Row>
        
    
        </Container>
        </>
    );
  } 

Hero.propTypes = {
    data: PropTypes.any,
};

export default Hero;
