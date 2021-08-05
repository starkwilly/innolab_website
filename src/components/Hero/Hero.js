import React from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, Button } from 'react-bootstrap';
import { parseImgSrc } from '../../common/RenderMarkdown';
import "./Hero.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";


function IdeasCTA() {
    return (
      <>
          <Link to="/add-idea"   >
          
          <Button variant="primary" >
          <FontAwesomeIcon icon={faLightbulb} size="1x" />
          idea  
          </Button>                 
          </Link>
      </>
    );
  }

const Hero = (props) => {
    const {data} = props;
    
    return (
        <>
        <Jumbotron className="jumbotron text-white p-4" fluid
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
                        <br/><span className="outstandingFont">innovation.</span>
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
