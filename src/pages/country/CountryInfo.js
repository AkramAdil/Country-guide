import React,{useState,useEffect} from 'react';
import Header from '../Header';
import "./CountryInfoStyle.css"
import CountrySection from './CountrySection';
import { useParams } from "react-router-dom";
const CountryPage = () => {
    const {countryname} = useParams()
    const [countryInfo, setCountryInfo] = useState()
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/name/${countryname}`)
        .then(data=>data.json())
        .then(results=>setCountryInfo(results[0]))
    },[countryname])
    return (
        <div className="countryPage">
            <Header/>
            {countryInfo&&<CountrySection countryData={countryInfo}/>}
        </div>
    );
};

export default CountryPage;