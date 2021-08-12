import React from 'react';
import './KeyPeople.scss';
import Arrow from '../../../../Assets/About/arrow.png';
import SharedTeam from './SharedTeam';

import { FormattedMessage } from 'react-intl';


const KeyPeople = () => {
    return (
        <div className="key-people">

            <div className="kp-title">
                <h1><FormattedMessage id="KeyPeople" /></h1>
            </div>

            <div className="kp-header">
                <h1><FormattedMessage id="MeetTheTeam" /></h1>
            </div>

            <div className="kp-info">
                <div className="kp-info-left">
                    <h1><FormattedMessage id="KPLeft" /></h1>
                </div>

                <div className="kp-info-right">
                    <h1><FormattedMessage id="KPRight" /></h1>
                </div>
            </div>

            <SharedTeam />

            <div className="kp-btn">
                <button className="kp-btn-content">
                    <h1><FormattedMessage id="KPButton" /></h1>
                    <img src={Arrow} alt="" />
                </button>
            </div>

        </div>
    );
}

export default KeyPeople;