import React from 'react';
import CountryCard from './CountryCard';

const Countries = ({allCountries,searchTerm,region}) => {
    //const selectCase = region==="None"?country.region:country.region===region

    return (
        <div className="countries">
            <div className="countries-container">
                {allCountries.filter(country=>country.name.common.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
                .filter((country=>region==="None"?country.region:country.region===region))
                .map((country)=>
                    <CountryCard key={country.name.common}
                    flag={country.flags.png} 
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    />
                )}
                
            </div>
        </div>
    );
};

export default Countries;