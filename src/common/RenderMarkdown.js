import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const RenderMarkdown = (props) => {
    const {children} = props;
    // window.log('RenderMarkdown', children);

    return (
        <ReactMarkdown
            {...props}
            linkTarget={href => (RegExp(/^\/+/).test(href)) ? null : "_blank"}
            // transformImageUri={src => process.env.REACT_APP_API+src}
        >{children}</ReactMarkdown>
    )
}

RenderMarkdown.propTypes = {
    children: PropTypes.any.isRequired,
}

export default RenderMarkdown;