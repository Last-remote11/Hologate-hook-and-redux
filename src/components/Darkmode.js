import React from 'react';

const Darkmode = ( {enableDarkMode} ) => {
    return (
        <button className='br-pill bg-gray hover-white' onClick={enableDarkMode}>Dark/Light Mode</button>
    );
};

export default Darkmode;