import React from 'react';
import Routes from 'routes/Routes';
import { trace } from './common/DevUtils';

window.debug = process.env.REACT_APP_DEBUG_MODE === 'true' ? true : false;
window.log = trace;

const App = () => {

    return (
        <>
            <Routes />
        </>
    );
}

export default App;
