import Routes from 'routes/Routes';
import { trace } from './common/DevUtils';

import React from "react";

window.debug = process.env.REACT_APP_DEBUG_MODE === 'TRUE' ? true : false;
window.log = trace;

// Tells screen readers the links opens in new tab
const blankAnchors = document.querySelectorAll('[target="_blank"]');
if (blankAnchors) {
    blankAnchors.forEach(anchor => {
        const text = anchor.textContent;
        if (text !== "") {
            anchor.setAttribute('aria-label', `${text.replace('.', '')} opens in new tab`);
        }
    });
}

const App = () => {
    return (
        <Routes />
    );
}

export default App;
