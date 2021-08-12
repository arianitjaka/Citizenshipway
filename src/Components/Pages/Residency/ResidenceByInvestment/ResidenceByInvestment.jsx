import React from 'react';
import './ResidenceByInvestment.scss';
import rbiPic from '../../../../Assets/Residency/residency-by-investment.png';

import { FormattedMessage } from 'react-intl';



const ResidenceByInvestment = () => {
    return (
        <div className="residence-by-investment">

            <div className="rbi-left">
                <div className="rbi-header">
                    <h1><FormattedMessage id="ResidenceByInvestment" /></h1>
                    <p><FormattedMessage id="RBIParagraph" /></p>
                </div>
                <div className="rbi-btn">
                    <button className="rbi-btn-content">
                        <h1><FormattedMessage id="RBIButton" /></h1>
                    </button>
                </div>
            </div>

            <div className="rbi-right">
                <img src={rbiPic} alt="" />
            </div>


        </div>
    );
}

export default ResidenceByInvestment;