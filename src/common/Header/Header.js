import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";



import "./Header.scss";

const Header = () => {
   

    return (
        <div className="fixed-top">
            <Navbar className="navbar-main" bg="primary" variant="dark">
                <Container className="px-0">
                    <Navbar.Text className="text-white">
                       
                        <span className="ml-3 font-weight-bold h5 mx-0 my-0 px-0 py-0">
                            Innolab 
                        </span>
                    </Navbar.Text>
                    
                </Container>

                <a href="#news">Home</a>
               
            </Navbar>
        </div>
    );
};

Header.propTypes = {
    user: PropTypes.object,
};

export default Header;
