/* eslint-disable no-unused-vars */

import {React ,useState } from 'react'
import {Jumbotron , Modal ,Button} from 'react-bootstrap'
import "./Hero.css"

           

import JsFileDownloader from 'js-file-downloader';


function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        idea
        </Button>
  
        <Modal   onEntered  = { function(){ 
            const download = new JsFileDownloader({ 
                url: 'https://innolab-stage.accenture.com/innolab-dev/downloadables/test.zip',
               autoStart: false
               });
         
         
                 download.start()
                 .then(function(){
                     // success 
                     console.log(download)
         
                 })
                 .catch(function(error){
                     // handle errors
                     console.log(error)
                 });
            
            }} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>Woohoo,  reading this text in a modal!</Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }






   // eslint-disable-next-line no-unused-vars


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
         

           
           <Example>
               
           </Example>
        </div>
        </>
    );
  }  


export default Hero;
