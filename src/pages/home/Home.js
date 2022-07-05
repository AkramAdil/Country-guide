import React, {useEffect, useState} from 'react';
import Header from '../Header';
import "./HomeStyle.css"
import Search from './Search';
import Countries from './Countries';
const Home = () => {
    const [allCountries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [region, setRegion] = useState("None")
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(data=>data.json())
        .then(results=>setCountries(results))
    },[])
    return (
        <div className="home">
            <Header/>
            <div className="container">
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} region={region} setRegion={setRegion}/>
                <Countries allCountries={allCountries} searchTerm={searchTerm} region={region}/>
            </div>
        </div>
    );
};

export default Home;