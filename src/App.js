import Routes from 'routes/Routes';
import { trace } from './common/DevUtils';

import React from "react";

window.debug = process.env.REACT_APP_DEBUG_MODE === 'TRUE' ? true : false;
window.log = trace;


const App = () => {

    return (
        <>
            <Routes />
    
        </>
    );
}

export default App;
