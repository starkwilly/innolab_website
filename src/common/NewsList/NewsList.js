import React from "react";
import PropTypes from "prop-types";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NewsList.scss";

const NewsList = () => {
    return (
        <NavDropdown title="News" className="newsContainer active">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
      </NavDropdown>
    )
};

NewsList.propTypes = {
    user: PropTypes.object,
};

export default NewsList;
