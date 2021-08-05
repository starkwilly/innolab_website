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
            transformImageUri={parseImgSrc}
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
        ? <Link to={props.href} target={dl ? "blank" : null} rel="noopener noreferrer">{props.children}</Link>
        : <a href={props.href} target="blank" rel="noopener noreferrer">{props.children}</a>
    );
}
RouterLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.any,
}

export const parseImgSrc = (src) => {
    window.log('RenderMardown > parseImgSrc > ', src, (process.env.REACT_APP_API_ENABLED !== "FALSE"), (src.indexOf("/") === 0), (src.indexOf(process.env.REACT_APP_API) === 0 ))
    if (process.env.REACT_APP_API_ENABLED !== "FALSE" && src.indexOf("/") === 0) {
        window.log('RenderMardown > parseImgSrc > CASE A')
        src = `${process.env.REACT_APP_API}${src}`;
    }else if (src.indexOf(process.env.REACT_APP_API) === 0 ) {
        window.log('RenderMardown > parseImgSrc > CASE B')
        src = src.substr(process.env.REACT_APP_API.length);
    }
    window.log('RenderMardown > parseImgSrc > OUTPUT ', src)
    return `${src}`;
}