import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input 
                type='search'
                placeholder="Enter Pokemon Index"
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;