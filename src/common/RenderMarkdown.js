import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const RenderMarkdown = (props) => {
    const {children} = props;
    // window.log('RenderMarkdown', children);

    return (
        <ReactMarkdown
            {...props}
            // transformImageUri={src => process.env.REACT_APP_API+src}
            components={{a: RouterLink}}
        >{children}</ReactMarkdown>
    )
}

RenderMarkdown.propTypes = {
    children: PropTypes.any.isRequired,
}

export default RenderMarkdown;

export const RouterLink = (props) => {
    const dl = RegExp(/^(\/download)+/i).test(props.href); // testing if href is /download
    return (
        RegExp(/^\/+(download)?/i).test(props.href) // test for any relative links starting with / or /download
        ? <Link to={props.href} target={dl ? "blank" : null}>{props.children}</Link>
        : <a href={props.href} target="blank">{props.children}</a>
    );
}
RouterLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.any,
}