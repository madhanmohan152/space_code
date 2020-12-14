import React from 'react';

const SearchBox = ({ onSearchValue, searchVal}) => {
    return (
        <div>
        <div className="input-group col-12 my-4 searchsection p-0">
            <input className="form-control py-2 " type="search" onChange={onSearchValue} placeholder="Search" value={searchVal} id="example-search-input"/>
                <span className="input-group-append">
                </span>
        </div>
        </div>
    )
}

export default SearchBox
