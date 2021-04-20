import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
    const { articles } = useSelector((state) => ({
        articles: state.article.list,
    }));

    const { id: selected_id } = useParams();
    const article = articles.find((item) => item.id === parseInt(selected_id));

    return (
        <Container>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <Link to="/articles" className="btn btn-primary">Back</Link>
        </Container>
    );
};

export default ArticleDetail;
