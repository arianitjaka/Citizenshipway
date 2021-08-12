import React from 'react';
import './CitizenshipByInvestment.scss';
import cbiPic from '../../../../Assets/Citizenship/citizenship-by-investment.png';

import { FormattedMessage } from 'react-intl';



const CitizenshipByInvestment = () => {
    return (
        <div className="citizenship-by-investment">

            <div className="cbi-left">
                <div className="cbi-header">
                    <h1><FormattedMessage id="CitizenshipByInvestment" /></h1>
                    <p><FormattedMessage id="CBIParagraphh" /></p>
                </div>
                <div className="cbi-btn">
                    <button className="cbi-btn-content">
                        <h1><FormattedMessage id="CBIButton" /></h1>
                    </button>
                </div>
            </div>

            <div className="cbi-right">
                <img src={cbiPic} alt="" />
            </div>
            

        </div>
    );
}

export default CitizenshipByInvestment;