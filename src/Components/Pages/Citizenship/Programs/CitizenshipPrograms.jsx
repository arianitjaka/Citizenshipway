import React from 'react';
import './CitizenshipPrograms.scss';
import SharedCitizenshipPrograms from './SharedCitizenshipPrograms';

import { FormattedMessage } from 'react-intl';


const CitizenshipPrograms = () => {
    return (
        <div className="programs-div">

            <div className="programs-title">
                <h1><FormattedMessage id="Programs" /></h1>
            </div>

            <SharedCitizenshipPrograms />

            <div className="load-more-programs">
                <button className="load-more-programs-btn">
                    <h1><FormattedMessage id="ProgramsButton" /></h1>
                </button>
            </div>

        </div>
    );
}

export default CitizenshipPrograms;