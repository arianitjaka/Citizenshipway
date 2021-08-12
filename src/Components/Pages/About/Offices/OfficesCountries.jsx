import React from 'react';
import './Offices.scss';
import pic1 from '../../../../Assets/About/Flags/1.png';
import pic2 from '../../../../Assets/About/Flags/2.png';
import pic3 from '../../../../Assets/About/Flags/3.png';
import pic4 from '../../../../Assets/About/Flags/4.png';
import pic5 from '../../../../Assets/About/Flags/5.png';
import pic6 from '../../../../Assets/About/Flags/6.png';
import pic7 from '../../../../Assets/About/Flags/7.png';

import PlusIcon from '../../../../Assets/About/Flags/plus.png';

import { FormattedMessage } from 'react-intl';


const OfficesCountries = () => {
    return (
        <div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic1} alt="" />
                    <h4><FormattedMessage id="AntiguaAndBarbuda" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic2} alt="" />
                    <h4><FormattedMessage id="Grenada" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic3} alt="" />
                    <h4><FormattedMessage id="Malta" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic4} alt="" />
                    <h4><FormattedMessage id="Cyprus" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic5} alt="" />
                    <h4><FormattedMessage id="DubaiUAE" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic6} alt="" />
                    <h4><FormattedMessage id="StKittsNevis" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic7} alt="" />
                    <h4><FormattedMessage id="StLucia" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

        </div>
    );
}

export default OfficesCountries;