import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div>
            <label for="poke-search" className="f5">Enter Pokemon Index : </label>
            <input 
                type='search'
                id= 'poke-search'
                placeholder="1 -> 150"
                onChange={searchChange}
                className = "f5"
                />
        </div>
    );
}

export default SearchBox;