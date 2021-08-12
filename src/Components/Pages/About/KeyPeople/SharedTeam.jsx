import React from 'react';
import './KeyPeople.scss';
import p2 from '../../../../Assets/About/People/2.png';
import p3 from '../../../../Assets/About/People/3.png';
import p4 from '../../../../Assets/About/People/4.png';
import p5 from '../../../../Assets/About/People/5.png';
import p6 from '../../../../Assets/About/People/6.png';
import p7 from '../../../../Assets/About/People/7.png';
import p8 from '../../../../Assets/About/People/8.png';

import { FormattedMessage } from 'react-intl';


const SharedTeam = () => {
    return (
        <div className="kp-team">

            <div className="kp-persons" id="kp-special-person">
                <div className="special-person-job">
                    <h1><FormattedMessage id="KPSpecialTitle" /></h1>
                </div>
                <div className="special-person-name">
                    <h1><FormattedMessage id="KPSpecialName" /></h1>
                </div>
                <div className="special-person-info">
                    <p><FormattedMessage id="KPSpecialInfo" /></p>
                </div>
                <div className="special-person-btn">
                    <button className="person-btn">
                        <h1><FormattedMessage id="KPSpecialButton" /></h1>
                    </button>
                </div>
            </div>

            <div className="kp-persons">
                <div className="kp-person-photo">
                    <img src={p2} alt="" />
                </div>

                <div className="kp-person-info">
                    <div className="kp-person-name">
                        <h1><FormattedMessage id="KPName1" /></h1>
                    </div>
                    <div className="kp-person-job">
                        <h1><FormattedMessage id="KPJob1" /></h1>
                    </div>
                </div>
            </div>

            <div className="kp-persons">
                <div className="kp-person-photo">
                    <img src={p3} alt="" />
                </div>

                <div className="kp-person-info">
                    <div className="kp-person-name">
                        <h1><FormattedMessage id="KPName2" /></h1>
                    </div>
                    <div className="kp-person-job">
                        <h1><FormattedMessage id="KPJob2" /></h1>
                    </div>
                </div>
            </div>

            <div className="kp-persons">
                <div className="kp-person-photo">
                    <img src={p4} alt="" />
                </div>

                <div className="kp-person-info">
                    <div className="kp-person-name">
                        <h1><FormattedMessage id="KPName3" /></h1>
                    </div>
                    <div className="kp-person-job">
                        <h1><FormattedMessage id="KPJob3" /></h1>
                    </div>
                </div>
            </div>

            <div className="kp-persons">
                <div className="kp-person-photo">
                    <img src={p5} alt="" />
                </div>

                <div className="kp-person-info">
                    <div className="kp-person-name">
                        <h1><FormattedMessage id="KPName4" /></h1>
                    </div>
                    <div className="kp-person-job">
                        <h1><FormattedMessage id="KPJob4" /></h1>
                    </div>
                </div>
            </div>

            <div className="kp-persons">
                <div className="kp-person-photo">
                    <img src={p6} alt="" />
                </div>

                <div className="kp-person-info">
                    <div className="kp-person-name">
                        <h1><FormattedMessage id="KPName5" /></h1>
                    </div>
                    <div className="kp-person-job">
                        <h1><FormattedMessage id="KPJob5" /></h1>
                    </div>
                </div>
            </div>

            <div className="kp-persons">
                <div className="kp-person-photo">
                    <img src={p7} alt="" />
                </div>

                <div className="kp-person-info">
                    <div className="kp-person-name">
                        <h1><FormattedMessage id="KPName6" /></h1>
                    </div>
                    <div className="kp-person-job">
                        <h1><FormattedMessage id="KPJob6" /></h1>
                    </div>
                </div>
            </div>

            <div className="kp-persons">
                <div className="kp-person-photo">
                    <img src={p8} alt="" />
                </div>

                <div className="kp-person-info">
                    <div className="kp-person-name">
                        <h1><FormattedMessage id="KPName7" /></h1>
                    </div>
                    <div className="kp-person-job">
                        <h1><FormattedMessage id="KPJob7" /></h1>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SharedTeam;