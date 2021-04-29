
import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import "./Hero.css"

const Hero = () => { 
    return (
        <Jumbotron className="jumbotron text-white p-4" fluid>
            <div className="p-4">
                <h1 className="display-4 text-uppercase font-weight-bolder">
                    <p>
                        Unleash
                        <br/>your best
                        <br/>through
                        <br/><span className="outstandingFont">innovation.</span>
                    </p>
                </h1>
                <div>
                    <p>
                        That&apos;s our motto.
                        <br/>We don&apos;t see innovation as our end, but the means.
                    </p>
                </div>
            </div>
        </Jumbotron>
    );
  }  


export default Hero;