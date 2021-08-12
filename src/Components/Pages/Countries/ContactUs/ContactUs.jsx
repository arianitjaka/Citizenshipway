import React from 'react';
import './ContactUs.scss';

import CUpic from '../../../../Assets/Countries/contact-us.png';

import { FormattedMessage } from 'react-intl';



const ContactUs = () => {
    return (
        <div className="contact-us">

            <div className="cu-left">
                <h1><FormattedMessage id="CountriesContactUs" /></h1>
                <p><FormattedMessage id="CCUParagraph" /></p>

                <div className="cu-button">
                    <div className="cu-btn-content">
                        <h1><FormattedMessage id="CountriesButton" /></h1>
                    </div>
                </div>
            </div>

            <div className="cu-right">
                <img src={CUpic} alt="" />
                <div className="cu-right-text">
                    <h1><FormattedMessage id="CountriesRightText" /></h1>
                </div>
            </div>

        </div>
    );
}

export default ContactUs;