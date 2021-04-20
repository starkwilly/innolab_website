import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

import { Link } from 'react-router-dom';

const DemoSections = () => {
    return (
        <CardDeck>
            <Card>
                <Card.Body>
                    <Card.Title>Articles sample</Card.Title>
                    <Card.Text>
                        This is an articles section with a code sample on how to
                        use services to get data from an API and use that data
                        in the App global storage with redux.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {/* Sample of how to use link and apply bootstrap styling */}
                    <Link to="/articles" className="btn btn-primary">Take a look!</Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Not found page</Card.Title>
                    <Card.Text>Sample &quot;Not found page&quot;.</Card.Text>
                </Card.Body>
                <Card.Footer>
                <Link to="/not-found" className="btn btn-primary">Take a look!</Link>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Forbidden page</Card.Title>
                    <Card.Text>Sample &quot;Forbidden page&quot;.</Card.Text>
                </Card.Body>
                <Card.Footer>
                <Link to="/forbidden" className="btn btn-primary">Take a look!</Link>
                </Card.Footer>
            </Card>
        </CardDeck>
    );
};

export default DemoSections;
