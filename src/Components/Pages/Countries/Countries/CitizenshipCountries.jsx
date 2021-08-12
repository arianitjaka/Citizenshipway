import React from 'react';
import './CitizenshipCountries.scss';
import SharedEuropenCitizenship from './SharedEuropeanCitizenship';
import SharedCaribbeanCitizenship from './SharedCaribbeanCitizenship';

import { FormattedMessage } from 'react-intl';



const CitizenshipCountries = () => {
    return (
        <div className="countries">

            <div className="countries-title">
                <h1><FormattedMessage id="CCountries" /></h1>
            </div>

            <div className="countries-tabs">
                <div className="citizenship-tab">
                    <h1><FormattedMessage id="CountriesCitizenship" /></h1>
                </div>

                <div className="residence-tab">
                    <h1><FormattedMessage id="CountriesResidence" /></h1>
                </div>
            </div>

            <SharedEuropenCitizenship />

            <SharedCaribbeanCitizenship />  

            <div className="countries-button">
                <button className="countries-btn-content">
                    <h1><FormattedMessage id="CountriesLearnMore" /></h1>
                </button>
            </div>          

        </div>
    );
}

export default CitizenshipCountries;