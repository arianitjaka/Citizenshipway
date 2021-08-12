import React from 'react';
import './ContactOffices.scss';
import OfficesPic from '../../../../Assets/Contact/offices.png';

import SharedCountries from './SharedCountries';

import ViewAll from '../../../../Assets/Contact/arrow.png';

import { FormattedMessage } from 'react-intl';


const ContactOffices = () => {
    return (
        <div className="offices">

            <div className="offices-left">

                <div className="offices-header">
                    <h1><FormattedMessage id="Offices" /></h1>
                </div>
                <div className="offices-title">
                    <h1><FormattedMessage id="WorldwideOffices" /></h1>
                </div>

                <SharedCountries />

                <div className="offices-btn">
                    <button className="view-all-btn">
                        <h4><FormattedMessage id="OfficesButton" /></h4>
                        <img src={ViewAll} alt="" />
                    </button>
                </div>

            </div>

            <div className="offices-right">
                <img src={OfficesPic} alt="" />
            </div>




        </div>
    );
}

export default ContactOffices;