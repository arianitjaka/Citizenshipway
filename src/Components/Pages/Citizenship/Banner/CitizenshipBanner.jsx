import React from 'react';
import './CitizenshipBanner.scss';

import { FormattedMessage } from 'react-intl';


const CitizenshipBanner = () => {
    return (
        <div className="citizenship-banner-div">
            <h1 className="citizenship-banner-text">
                <FormattedMessage id="CitizenshipTitle" />
            </h1>
            <p className="citizenship-banner-paragraph">
                <FormattedMessage id="CitizenshipParagraph" />
            </p>
        </div>
    );
}

export default CitizenshipBanner;