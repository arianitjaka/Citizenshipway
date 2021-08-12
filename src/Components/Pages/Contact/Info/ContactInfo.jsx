import React from 'react';
import './ContactInfo.scss';

import Costumer from '../../../../Assets/Contact/costumer.png';
import Government from '../../../../Assets/Contact/government.png';
import Job from '../../../../Assets/Contact/job.png';
import Arrow from '../../../../Assets/Contact/arrow.png';

import { FormattedMessage } from 'react-intl';


const ContactInfo = () => {
    return (
        <div className="contact-info">

            <div className="info-content">
                <img src={Costumer} alt="" />
                <h1><FormattedMessage id="InfoLeft" /></h1>
                <p><FormattedMessage id="ILParagraph" /></p>

                <div className="more-info-content">
                    <h1><FormattedMessage id="ILLink" /></h1>
                    <img src={Arrow} alt="" />
                </div>
            </div>

            <div className="info-content">
                <img src={Government} alt="" />
                <h1><FormattedMessage id="InfoCenter" /></h1>
                <p><FormattedMessage id="ICParagraph" /></p>

                <div className="more-info-content">
                    <h1><FormattedMessage id="ICLink" /></h1>
                    <img src={Arrow} alt="" />
                </div>
            </div>

            <div className="info-content">
                <img src={Job} alt="" />
                <h1><FormattedMessage id="InfoRight" /></h1>
                <p><FormattedMessage id="IRParagraph" /></p>

                <div className="more-info-content">
                    <h1><FormattedMessage id="IRLink" /></h1>
                    <img src={Arrow} alt="" />
                </div>
            </div>

        </div>
    );
}

export default ContactInfo;