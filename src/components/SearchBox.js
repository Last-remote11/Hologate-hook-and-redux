import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                aria-label='Seatch Vtuber'
                className='pa2 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Vtuber' 
                onChange={searchChange}>
            </input>
        </div>
    );
};

export default SearchBox;