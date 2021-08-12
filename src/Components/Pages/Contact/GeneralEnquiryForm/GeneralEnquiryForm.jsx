import React from 'react';
import './GeneralEnquiryForm.scss';
import SharedForm from './SharedForm';

import gefPhoto from '../../../../Assets/Contact/form.png';

import { FormattedMessage } from 'react-intl';


const GeneralEnquiryForm = () => {
    return (
        <div className="general-enquiry-form">

            <div className="gef-left">
                <div className="left-content">
                    <h1><FormattedMessage id="GeneralEnquiryForm" /></h1>
                    <p><FormattedMessage id="GEFParagraph" /></p>
                </div>

                <div className="left-img">
                    <img src={gefPhoto} alt="" />
                </div>
            </div>

            <SharedForm />

        </div>
    );
}

export default GeneralEnquiryForm;