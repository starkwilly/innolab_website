
import React from 'react'
import {Jumbotron , Container} from 'react-bootstrap'


class Hero extends React.Component  { 
  render(){
    return (
        <div>
            <Jumbotron className="jumbotron" fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>

                <Container className="jumbotronFooterText">
                    <h1>Fluid jumbotron</h1>
                    <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    );
  }  
}

export default Hero;
