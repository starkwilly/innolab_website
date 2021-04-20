import React from 'react';
import PropTypes from 'prop-types';

const Minimal = props => {
    const { children } = props;

    return (
        <main>{children}</main>
    );
};

Minimal.propTypes = {
    children: PropTypes.node,
};

export default Minimal;