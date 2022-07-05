import React from 'react';

const Search = ({searchTerm, setSearchTerm,region, setRegion}) => {
    return (
        <div className="search">
            <div className="search-box">
                <i className='bx bx-search search-icon'></i>
                <input type="text" placeholder="Search for a country..." 
                className="search-term"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
            </div>
            <select name="regions" className="regions" value={region} onChange={(e)=>setRegion(e.target.value)}>
                <option disabled value="Choose">Choose A Region</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Americas">Americas</option>
                <option value="None">All Regions</option>
            </select>
        </div>
    );
};

export default Search;