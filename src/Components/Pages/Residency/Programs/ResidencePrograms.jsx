import React from 'react';
import './ResidencePrograms.scss';
import SharedResidencePrograms from './SharedResidencePrograms';

import { FormattedMessage } from 'react-intl';


const ResidencePrograms = () => {
    return (
        <div className="programs-div">

            <div className="programs-title">
                <h1><FormattedMessage id="Programs" /></h1>
            </div>

            <SharedResidencePrograms />

            <div className="load-more-programs">
                <button className="load-more-programs-btn">
                    <h1><FormattedMessage id="ProgramsButton2" /></h1>
                </button>
            </div>

        </div>
    );
}

export default ResidencePrograms;