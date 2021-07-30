import React from 'react';

const DemoOutput = props => {
    console.log('here');
    return (
        <p>{props.isShow ? 'This is new' : ''}</p>
    );
}

export default React.memo(DemoOutput);