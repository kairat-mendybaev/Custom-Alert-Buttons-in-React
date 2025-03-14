import React from 'react';
import AlertButton from './AlertButton';

function Toolbar() {
    return (
        <div>
            <AlertButton message="Hello World!">Click Me!</AlertButton>
            <AlertButton message="Another message!">Another Button</AlertButton>
        </div>
    );
}

export default Toolbar;

