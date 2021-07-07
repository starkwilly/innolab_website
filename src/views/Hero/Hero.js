
import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import "./Hero.css"

           
import descargarDikiri from '../Dashboard/Dashboard'

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
                <div>
                    <p>
                        That&apos;s our motto.
                        <br/>We don&apos;t see innovation as our end, but the means.
                    </p>
                </div>
            </div>
        </Jumbotron>
        <div className="fixed-bottom ideasCta">  
           <button onClick={descargarDikiri()}>idea</button>

           

        </div>
        </>
    );
  }  


export default Hero;
