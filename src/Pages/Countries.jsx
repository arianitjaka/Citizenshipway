import React from 'react';
import CountriesHeader from '../Components/Pages/Countries/Header/CountriesHeader';
import CountriesInfo from '../Components/Pages/Countries/Info/CountriesInfo';
import InvestmentMigrationCountries from '../Components/Pages/Countries/InvestmentMigrationCountries/InvestmentMigrationCountries';
import CitizenshipCountries from '../Components/Pages/Countries/Countries/CitizenshipCountries';
import ContactUs from '../Components/Pages/Countries/ContactUs/ContactUs';


const Countries = () => {
    return (
        <div>
            <CountriesHeader />
            <CountriesInfo />
            <InvestmentMigrationCountries />
            <CitizenshipCountries />
            <ContactUs />
        </div>
    );
}

export default Countries;