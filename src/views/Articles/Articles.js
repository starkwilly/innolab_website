import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { Link } from 'react-router-dom';

import "./Articles.scss";

import { setArticles } from "../../_store/actions/articlesActions";
import { getArticles } from "../../_services/articleService";

const Articles = () => {
    const { articles } = useSelector((state) => ({
        articles: state.article.list,
    }));

    const dispatch = useDispatch();

    // Behavior state
    const [waiting, setWaiting] = useState(false);

    // Effects
    // Check if articles are not present in the global state / empty
    useEffect(() => {
        // Get articles data from the API and update the App store
        const getInitialData = async () => {
            setWaiting(true);
            const articlesRes = await getArticles();
            dispatch(setArticles(articlesRes.data));
            setWaiting(false);
        };

        // only call getArticles at the initial mount.
        if (articles.length === 0) {
            getInitialData();
        }
    }, [articles]);

    const renderArticles = () => {
        return articles.map((article, index) => {
            return (
                <Card key={`${article.title}-${index}`}>
                    <Card.Header as="h5">{article.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.body}</Card.Text>
                        <Link to={`/article/${article.id}`} className="btn btn-primary">View Details</Link>
                    </Card.Body>
                </Card>
            );
        });
    };
    return (
        <>
            <h1 className="mt-1">Articles content</h1>
            {articles.length === 0 && waiting ? (
                <div className="d-flex justify-content-center align-items-center">
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <Container className="articles-group">
                    {renderArticles()}
                </Container>
            )}
        </>
    );
};

export default Articles;
