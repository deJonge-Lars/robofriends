import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='white pa3 mb4 ba bw2 b--purple bg-light-purple'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
                />
        </div>
    );

}

export default SearchBox;