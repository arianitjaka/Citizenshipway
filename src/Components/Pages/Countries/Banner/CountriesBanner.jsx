import React from 'react';
import './CountriesBanner.scss';

import { FormattedMessage } from 'react-intl';


const CountriesBanner = () => {
    return (
        <div className="countries-banner-div">
            <h1 className="countries-banner-text">
                <FormattedMessage id="InvestmentMigrationCountries" />
            </h1>
            <p className="countries-banner-paragraph">
                <FormattedMessage id="IMCParagraph" />
            </p>
        </div>
    );
}

export default CountriesBanner;