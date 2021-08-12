import React from 'react';
import './GeneralEnquiryForm.scss';

import ArrowDown from '../../../../Assets/Contact/down.png';
import User from '../../../../Assets/Contact/inputs/user.png';
import World from '../../../../Assets/Contact/inputs/world.png';
import Location from '../../../../Assets/Contact/inputs/location.png';
import Email from '../../../../Assets/Contact/inputs/email.png';
import Flag from '../../../../Assets/Contact/inputs/flag.png';

import { FormattedMessage } from 'react-intl';



const SharedForm = () => {
    return (
        <div className="gef-right">
            <div className="form-title">
                <h1><FormattedMessage id="FormTitle" /></h1>
            </div>
            <div className="form-radio">
                <input type="checkbox" />
                <h3><FormattedMessage id="RadioOne" /></h3>
            </div>
            <div className="form-radio">
                <input type="checkbox" />
                <h3><FormattedMessage id="RadioTwo" /></h3>
            </div>
            <div className="form-radio">
                <input type="checkbox" />
                <h3><FormattedMessage id="RadioThree" /></h3>
            </div>

            <div className="form-contact-info">
                <div className="contact-title">
                    <h1><FormattedMessage id="ContactInformation" /></h1>
                </div>
            </div>

            {/* Form */}
            <div className="form-inputs">
                <div className="form-content">
                    <h6><FormattedMessage id="Salutation" />*</h6>

                    <div className="form-select">
                        <h6><FormattedMessage id="Select" /></h6>
                        <img src={ArrowDown} alt="" />
                    </div>
                </div>

                <div className="form-content">
                    <h6><FormattedMessage id="HowDidYouHearAboutUs" />*</h6>

                    <div className="form-select">
                        <h6><FormattedMessage id="Select" /></h6>
                        <img src={ArrowDown} alt="" />
                    </div>
                </div>

                <div className="form-content">
                    <h6><FormattedMessage id="FirstName" />*</h6>

                    <div className="form-text">
                        <img src={User} alt="" />
                        <span>|</span>
                        <input type="text" placeholder="Enter first name" className="form-input-field" />
                    </div>
                </div>

                <div className="form-content">
                    <h6><FormattedMessage id="LastName" />*</h6>

                    <div className="form-text">
                        <img src={User} alt="" />
                        <span>|</span>
                        <input type="text" placeholder="Enter last name" className="form-input-field" />
                    </div>
                </div>

                <div className="form-content">
                    <h6><FormattedMessage id="Nationality" />*</h6>

                    <div className="form-select">
                        <div className="nationality-form">
                            <img src={World} alt="" />
                            <span>|</span>
                            <h6><FormattedMessage id="Select" /></h6>
                        </div>
                        <img src={ArrowDown} alt="" />
                    </div>
                </div>

                <div className="form-content">
                    <h6><FormattedMessage id="CountryOfResidence" />*</h6>

                    <div className="form-select">
                        <div className="nationality-form">
                            <img src={Location} alt="" />
                            <span>|</span>
                            <h6><FormattedMessage id="Select" /></h6>
                        </div>
                        <img src={ArrowDown} alt="" />
                    </div>
                </div>

                <div className="form-content">
                    <h6><FormattedMessage id="PrimaryEmail" />*</h6>

                    <div className="form-text">
                        <img src={Email} alt="" />
                        <span>|</span>
                        <input type="email" placeholder="Enter primary email" className="form-input-field" />
                    </div>
                </div>

                <div className="form-content">
                    <h6><FormattedMessage id="AlternativeEmail" />*</h6>

                    <div className="form-text">
                        <img src={Email} alt="" />
                        <span>|</span>
                        <input type="email" placeholder="Enter alternative email" className="form-input-field" />
                    </div>
                </div>

            </div>

            <div className="form-content">
                <h6><FormattedMessage id="PhoneNumber" />*</h6>

                <div className="form-select">
                    <div className="nationality-form">
                        <img src={Flag} alt="" />
                        <span>|</span>
                        <h6><FormattedMessage id="EnterPhoneNumber" /></h6>
                    </div>
                    <img src={ArrowDown} alt="" />
                </div>
            </div>

            <div className="form-content">
                <h6><FormattedMessage id="Message" /></h6>

                <textarea placeholder="I have a specific question..." rows="4" cols="73" className="form-input-field" />

                <h6 className="text-limit"><FormattedMessage id="TextLimit" /></h6>
            </div>


            <div className="form-button">
                <div className="form-btn-content">
                    <h4><FormattedMessage id="FormButton" /></h4>
                </div>
            </div>

        </div>
    );
}

export default SharedForm;