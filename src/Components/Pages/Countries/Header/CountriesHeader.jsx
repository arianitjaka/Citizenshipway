import React from 'react';
import './CountriesHeader.scss';
import Navbar from '../../../Navbar/Navbar';
import CountriesBanner from '../Banner/CountriesBanner';


const CountriesHeader = () => {
  return (
    <div className="countries-header">
      <Navbar />
      <CountriesBanner />
    </div>
  );
}

export default CountriesHeader;