import React from 'react';
import './ResidencyBanner.scss';

import { FormattedMessage } from 'react-intl';


const ResidencyBanner = () => {
    return (
        <div className="about-banner-div">
            <h1 className="about-banner-text">
                <FormattedMessage id="PermanentResidencePermit" />
            </h1>
            <p className="about-banner-paragraph">
                <FormattedMessage id="PRPParagraph" />
            </p>
        </div>
    );
}

export default ResidencyBanner;