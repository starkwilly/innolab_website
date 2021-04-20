import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt, faCoffee } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';

import "./Header.scss";

const Header = ({ user }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed-top">
            <Navbar className="navbar-main" bg="primary" variant="dark">
                <Container className="px-0">
                    <Navbar.Text className="text-white">
                        <FontAwesomeIcon icon={faCoffee} size="lg" />
                        <span className="ml-3 font-weight-bold h5 mx-0 my-0 px-0 py-0">
                            Innolab | React Base with Botstrap
                        </span>
                    </Navbar.Text>
                    <div className="navbar-user-container">
                        {user && (
                            <div
                                className="navbar-text text-white"
                                style={{ fontSize: "0.75rem" }}
                            >
                                <FontAwesomeIcon
                                    icon={faUserCircle}
                                    size="2x"
                                    tabIndex="0"
                                    className="navbar-main-avatar"
                                    onBlur={() => setOpen(false)}
                                    onClick={() => setOpen(!open)}
                                />
                                <div
                                    className={clsx([
                                        "dropdown-menu dropdown-menu-right",
                                        open && "show",
                                    ])}
                                >
                                    <h6 className="dropdown-header">
                                        {user.name} {user.lastname}
                                    </h6>
                                    <div className="dropdown-divider mt-1" />
                                    <button type="button">
                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

Header.propTypes = {
    user: PropTypes.object,
};

export default Header;
