import React from 'react';
import './Offices.scss';
import OfficesPic from '../../../../Assets/About/offices.png';

import OfficesCountries from './OfficesCountries';

import VAIcon from '../../../../Assets/About/Flags/view-all-icon.png';

import { FormattedMessage } from 'react-intl';


const Offices = () => {
    return (
        <div className="offices">

            <div className="offices-left">

                <div className="offices-header">
                    <h1><FormattedMessage id="Offices" /></h1>
                </div>
                <div className="offices-title">
                    <h1><FormattedMessage id="WorldwideOffices" /></h1>
                </div>

                <OfficesCountries />

                <div className="offices-btn">
                    <button className="view-all-btn">
                        <h4><FormattedMessage id="OfficesButton" /></h4>
                        <img src={VAIcon} alt="" />
                    </button>
                </div>

            </div>

            <div className="offices-right">
                <img src={OfficesPic} alt="" />
            </div>




        </div>
    );
}

export default Offices;