import './App.css';
import Home from './pages/home/Home';
import CountryInfo from './pages/country/CountryInfo';
import {createContext} from 'react';
import { Routes, Route } from 'react-router-dom';

export const ThemeContext = createContext("")

function App() {
  return (
    <ThemeContext.Provider value={{theme:"dark"}}>
      <div className="App dark">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:countryname" element={<CountryInfo/>}/>
        </Routes>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
