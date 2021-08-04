/* eslint-disable no-unused-vars */

import {React ,useState } from 'react'
import {Jumbotron , Modal ,Button , Form } from 'react-bootstrap'
import "./Hero.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

           

//import JsFileDownloader from 'js-file-downloader';


function IdeasCTA() {

  
    return (
      <>
       
          <Link to="/add-idea"   >
          
          <Button variant="primary" >
          <FontAwesomeIcon icon={faLightbulb} size="md" />
          idea  
          </Button>                 
          </Link>
       
      </>
    );
  }

const Hero = () => { 
    return (
        <>
        <Jumbotron className="jumbotron text-white p-4" fluid>
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


export default Hero;
