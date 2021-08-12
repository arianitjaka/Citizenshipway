import React from 'react';
import './Programs.scss';
import SharedPrograms from './SharedPrograms';
import ViewAllIcon from '../../../../Assets/Home/Programs/view-all-icon.png';
import { FormattedMessage } from 'react-intl';


const Programs = () => {
    return (
        <div className="programs-div">

            <div className="programs-title">
                <h1><FormattedMessage id="Programs" /></h1>
            </div>

            <div className="programs-tabs">
                <div className="citizenship-tab">
                    <h1><FormattedMessage id="CitizenshipOption" /></h1>
                </div>

                <div className="residence-tab">
                    <h1><FormattedMessage id="ResidenceOption" /></h1>
                </div>
            </div>

            <SharedPrograms />

            <div className="view-all-programs">
                <button className="view-all-programs-btn">
                    <h1>
                        <FormattedMessage id="ProgramsButton" />
                        <img src={ViewAllIcon} alt="" />
                    </h1>
                </button>
            </div>

        </div>
    );
}

export default Programs;