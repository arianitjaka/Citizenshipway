import React from 'react';
import CitizenshipHeader from '../Components/Pages/Citizenship/Header/CitizenshipHeader';
import CitizenshipByInvestment from '../Components/Pages/Citizenship/CitizenshipByInvestment/CitizenshipByInvestment';
import CitizenshipPrograms from '../Components/Pages/Citizenship/Programs/CitizenshipPrograms';
import CitizenshipPlanning from '../Components/Pages/Citizenship/CitizenshipPlanning/CitizenshipPlanning';
import CitizenshipBottom from '../Components/Pages/Citizenship/CitizenshipBottom/CitizenshipBottom';



const Citizenship = () => {
    return (
        <div>
            <CitizenshipHeader />
            <CitizenshipByInvestment />
            <CitizenshipPrograms />
            <CitizenshipPlanning />
            <CitizenshipBottom />
        </div>
    );
}

export default Citizenship;