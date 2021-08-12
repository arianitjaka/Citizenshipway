import React from 'react';
import './CountriesInfo.scss';
import pic1 from '../../../../Assets/Countries/private-clients.png';
import pic2 from '../../../../Assets/Countries/government-advisory.png';
import pic3 from '../../../../Assets/Countries/practice-group.png';

import { FormattedMessage } from 'react-intl';



const CountriesInfo = () => {
    return (
        <div className="countries-info">

            <div className="ci-container">

                <div className="ci-column">
                    <img src={pic1} alt="" />
                    <h1><FormattedMessage id="PrivateClients" /></h1>
                    <p><FormattedMessage id="PCParagraph" /></p>
                </div>
                <div className="ci-column">
                    <img src={pic2} alt="" />
                    <h1><FormattedMessage id="GovernmentAdvisory" /></h1>
                    <p><FormattedMessage id="GAParagraph" /></p>
                </div>
                <div className="ci-column">
                    <img src={pic3} alt="" />
                    <h1><FormattedMessage id="PracticeGroup" /></h1>
                    <p><FormattedMessage id="PGParagraph" /></p>
                </div>


            </div>

        </div>
    );
}

export default CountriesInfo;