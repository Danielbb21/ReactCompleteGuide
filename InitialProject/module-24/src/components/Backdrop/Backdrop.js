import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    console.log('pops', props);
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClose'];
    console.log(cssClasses);
    return <div className={cssClasses.join(' ')}></div>
};

export default backdrop;