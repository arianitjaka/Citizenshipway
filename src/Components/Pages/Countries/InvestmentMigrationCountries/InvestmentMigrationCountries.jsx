import React from 'react';
import './InvestmentMigrationCountries.scss';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import { FormattedMessage } from 'react-intl';


const InvestmentMigrationCountries = () => {
    return (
        <div className="investment-migration-countries">

            <div className="imc-content">

                <div className="imc-video">
                    <PlayCircleFilledIcon />
                </div>

                <div className="imc-info">
                    <div className="imc-title">
                        <h1><FormattedMessage id="IMCTitle" /></h1>
                    </div>
                    <div className="imc-paragraph">
                        <p><FormattedMessage id="IMCParagraphh" /></p>
                    </div>
                    <div className="imc-btn">
                        <button className="btn-content">
                            <h1><FormattedMessage id="IMCButton" /></h1>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default InvestmentMigrationCountries;
