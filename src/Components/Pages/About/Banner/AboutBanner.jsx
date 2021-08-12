import React from 'react';
import './AboutBanner.scss';
import { FormattedMessage } from 'react-intl';


const AboutBanner = () => {
    return (
        <div className="about-banner-div">
            <h1 className="about-banner-text">
                <FormattedMessage id="AboutTitle" />
            </h1>
            <p className="about-banner-paragraph">
                <FormattedMessage id="AboutParagraph" />
            </p>
        </div>
    );
}

export default AboutBanner;