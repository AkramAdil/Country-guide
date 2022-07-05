import React from 'react';
const CountryCard = ({flag,name,population,region,capital}) => {
    return (
        <a href={"/"+name} className="contryLink">
            <div className="country">
                    <div className="flag">
                        <img src={flag} className="card-img" alt="flag"/>
                    </div>
                    <div className="name">
                        {name}
                    </div>
                    <div className="info">
                        <p className="population">Population: {population}</p>
                        <p className="region">Region: {region}</p>
                        <p className="capital">Capital: {capital}</p>
                    </div>
            </div>
        </a>
    );
};

export default CountryCard;