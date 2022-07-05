import React from 'react';

const CountrySection = ({countryData}) => {

    const nativeName = Object.values(countryData.name.nativeName)[0]
    const currencyName = Object.values(countryData.currencies)[0]
    const languages = Object.values(countryData.languages).join(", ")

    return (
        <div className="country-info">

            <div className="back">
                <a href="/"><i className='bx bx-left-arrow-alt'></i> Back</a>
            </div>
            <div className="country-container">
                <section className="flag">
                    <img src={countryData.flags.png} className="" alt="Country Flag"/>
                </section>

                <section className="information">
                    <h2 className="name">
                        {countryData.name.common}
                    </h2>
                    <div className="extra">
                        <p className="NativeName">Native Name: {nativeName.common}</p>
                        <p className="population">Population: {countryData.population}</p>
                        <p className="region">Region: {countryData.region}</p>
                        <p className="subRegion">SubRegion: {countryData.subregion}</p>
                        <p className="capital">Capital: {countryData.capital[0]}</p>
                        <p className="domain">Domain: {countryData.cca2}</p>
                        <p className="currency">Currencies: {currencyName.name}</p>
                        <p className="languages">languages: {languages}</p>
                        <p className="borders">Borders with: {countryData.borders.join(", ")}<span></span></p>
                    </div>
                </section>
            </div>    
        </div>
    );
};

export default CountrySection;