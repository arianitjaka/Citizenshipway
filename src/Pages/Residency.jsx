import React from 'react';
import ResidencyHeader from '../Components/Pages/Residency/Header/ResidencyHeader';
import ResidenceByInvestment from '../Components/Pages/Residency/ResidenceByInvestment/ResidenceByInvestment';
import ResidencePrograms from '../Components/Pages/Residency/Programs/ResidencePrograms';
import ResidencePlanning from '../Components/Pages/Residency/ResidencePlanning/ResidencePlanning';
import ResidenceBottom from '../Components/Pages/Residency/ResidenceBottom/ResidenceBottom';



const Residency = () => {
    return (
        <div>
            <ResidencyHeader />
            <ResidenceByInvestment />
            <ResidencePrograms />
            <ResidencePlanning />
            <ResidenceBottom />
        </div>
    );
}

export default Residency;