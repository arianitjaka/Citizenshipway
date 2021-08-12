import React from 'react';
import './ResidencePrograms.scss';
import Austria from '../../../../Assets/Residency/cities/austria.png';
import Cyprus from '../../../../Assets/Residency/cities/cyprus.png';
import Greece from '../../../../Assets/Residency/cities/greece.png';
import Malta from '../../../../Assets/Residency/cities/malta.png';
import Portugal from '../../../../Assets/Residency/cities/portugal.png';
import UAE from '../../../../Assets/Residency/cities/uae.png';
import Australia from '../../../../Assets/Residency/cities/australia.png';
import NewZealand from '../../../../Assets/Residency/cities/new-zealand.png';

import { FormattedMessage } from 'react-intl';


const SharedResidencePrograms = () => {
    return (
        <div>

            <div className="programs-tabs-content">

                <div className="programs-tabs-citizenship">
                    <img src={Austria} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="AustriaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="AustriaParagraph" /></p>
                    </div>
                </div>

                <div className="programs-tabs-citizenship">
                    <img src={Cyprus} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="CyprusCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="CyprusParagraph" /></p>
                    </div>
                </div>

                <div className="programs-tabs-citizenship">
                    <img src={Greece} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="GreeceCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="GreeceParagraph" /></p>
                    </div>
                </div>

                <div className="programs-tabs-citizenship">
                    <img src={Malta} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="MaltaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="MaltaParagraph" /></p>
                    </div>
                </div>

                <div className="programs-tabs-citizenship">
                    <img src={Portugal} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="PortugalCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="PortugalParagraph" /></p>
                    </div>
                </div>

                <div className="programs-tabs-citizenship">
                    <img src={UAE} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="UAECity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="UAEParagraph" /></p>
                    </div>
                </div>

                <div className="programs-tabs-citizenship">
                    <img src={Australia} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="AustraliaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="AustraliaParagraph" /></p>
                    </div>
                </div>

                <div className="programs-tabs-citizenship">
                    <img src={NewZealand} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="NewZealandCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="NewZealandParagraph" /></p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SharedResidencePrograms;