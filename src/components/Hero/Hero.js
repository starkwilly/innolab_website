import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Button } from 'react-bootstrap';
import { parseImgSrc } from '../../common/RenderMarkdown';
import "./Hero.css";
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import LightbulbIcon from 'components/LightbulbIcon';


function IdeasCTA() {
    return (
      <>
          <Link to="/add-idea"   >
          
          <Button>
          <LightbulbIcon width={20} height={20} />
          Idea  
          </Button>                 
          </Link>
      </>
    );
  }

const Hero = (props) => {
    const {data} = props;
    
    return (
        <>
        <Jumbotron className="container jumbotron text-white p-4" fluid
            style={
                data.ImageBg
                    ? {
                        backgroundImage: `url(${parseImgSrc(data.ImageBg.url)}`
                    }
                    : {}
            }
        >
            <div className="pt-5">
                <h1 className="display-4 text-uppercase font-weight-bolder">
                    <p>
                        Unleash
                        <br/>your best
                        <br/>through
                        <br/>
                        <span className="outstanding-title position-relative">
                            <svg className="blur-font" width="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(97)">
                                    <stop stopColor="#a442ff" offset="10%" stopOpacity="1"/>
                                    <stop stopColor="#000" offset="35%" stopOpacity="0"/>
                                    <stop stopColor="#00e1ff" offset="50%" stopOpacity="1"/>
                                    <stop stopColor="#ff0000" offset="80%" stopOpacity=".7"/>
                                    </linearGradient>
                                </defs>
                                <g>
                                    <text id="text" y="50" fontFamily="Graphik Web" fontSize="3.5rem" fontWeight="900" strokeWidth="5" stroke="url(#gradient)" fill="none">innovation.</text>
                                </g>
                            </svg>
                            <span className="outstandingFont">innovation.</span>
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
        </Jumbotron>
        <div className="fixed-bottom ideasCta">  
           <IdeasCTA/>
        </div>
        </>
    );
  } 

Hero.propTypes = {
    data: PropTypes.any,
};


export default Hero;
