import React from 'react';
import './ContactOffices.scss';
import pic1 from '../../../../Assets/Contact/flags/1.png';
import pic2 from '../../../../Assets/Contact/flags/2.png';
import pic3 from '../../../../Assets/Contact/flags/3.png';
import pic4 from '../../../../Assets/Contact/flags/4.png';
import pic5 from '../../../../Assets/Contact/flags/5.png';
import pic6 from '../../../../Assets/Contact/flags/6.png';

import PlusIcon from '../../../../Assets/About/Flags/plus.png';
import MinusIcon from '../../../../Assets/Contact/minus.png';

import Location from '../../../../Assets/Contact/location.png';
import Phone from '../../../../Assets/Contact/phone.png';
import Email from '../../../../Assets/Contact/email.png';

import { FormattedMessage } from 'react-intl';


const SharedCountries = () => {
    return (
        <div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic1} alt="" />
                    <h4><FormattedMessage id="AntiguaAndBarbuda" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={MinusIcon} alt="" />
                </div>
            </div>

            <div className="country-more-info">
                <div className="country-more-info-content">
                    <img src={Location} alt="" />
                    <h5><FormattedMessage id="OfficeLocation" /></h5>
                </div>

                <div className="country-more-info-content">
                    <img src={Phone} alt="" />
                    <h5><FormattedMessage id="OfficePhone" /></h5>
                </div>

                <div className="country-more-info-content">
                    <img src={Email} alt="" />
                    <h5><FormattedMessage id="OfficeEmail" /></h5>
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic2} alt="" />
                    <h4><FormattedMessage id="StLucia" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic3} alt="" />
                    <h4><FormattedMessage id="Grenada" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic4} alt="" />
                    <h4><FormattedMessage id="Malta" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic5} alt="" />
                    <h4><FormattedMessage id="Cyprus" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

            <div className="offices-countries">
                <div className="country-flag-and-name">
                    <img src={pic6} alt="" />
                    <h4><FormattedMessage id="DubaiUAE" /></h4>
                </div>

                <div className="country-more-info">
                    <img src={PlusIcon} alt="" />
                </div>
            </div>

        </div>
    );
}

export default SharedCountries;