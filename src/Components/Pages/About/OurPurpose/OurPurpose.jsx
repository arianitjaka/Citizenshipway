import React from 'react';
import './OurPurpose.scss';
import OPpic from '../../../../Assets/About/our-purpose.png';

import { FormattedMessage } from 'react-intl';


const OurPurpose = () => {
    return (
        <div className="our-purpose">

            <div className="op-left">
                <img src={OPpic} alt="" />
                <div className="op-left-text">
                    <h1><FormattedMessage id="OurPurposeLeft" /></h1>
                </div>
            </div>

            <div className="op-right">
                <h1><FormattedMessage id="OurPurpose" /></h1>
                <p><FormattedMessage id="OurPurposeParagraph" /></p>
            </div>

        </div>
    );
}

export default OurPurpose;