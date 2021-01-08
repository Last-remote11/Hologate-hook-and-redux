import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY:'scroll', border: '4px solid rgb(1, 10, 59)', height:'800px' }}>
            {props.children}
        </div>
    )
};

export default Scroll