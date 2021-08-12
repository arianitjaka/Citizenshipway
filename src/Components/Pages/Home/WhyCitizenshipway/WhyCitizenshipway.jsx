import React from 'react';
import './WhyCitizenshipway.scss';
import LicencedAgents from '../../../../Assets/Home/WhyCitizenshipway/licenced-agents.png';
import TailoredSolutions from '../../../../Assets/Home/WhyCitizenshipway/tailored-solutions.png';
import ApplyConfidence from '../../../../Assets/Home/WhyCitizenshipway/apply-confidence.png';

import { FormattedMessage } from 'react-intl';


const WhyCitizenshipway = () => {
    return (
        <div className="why-div">

            <div className="why-container">

                <div className="why-title">
                    <h1><FormattedMessage id="WhyCitizenshipway" /></h1>
                    <p><FormattedMessage id="WhyCitizenshipwayParagraph" /></p>
                </div>

                <div className="why-content">
                    <div className="why-cards" id="licenced-agents">
                        <img src={LicencedAgents} alt=""/>
                        <h1><FormattedMessage id="LicencedAgents" /></h1>
                        <p><FormattedMessage id="LicencedAgentsParagraph" /></p>
                    </div>

                    <div className="why-cards" id="tailored-solutions">
                        <img src={TailoredSolutions} alt=""/>
                        <h1><FormattedMessage id="TailoredSolutions" /></h1>
                        <p><FormattedMessage id="TailoredSolutionsParagraph" /></p>
                    </div>

                    <div className="why-cards" id="apply-confidence">
                        <img src={ApplyConfidence} alt=""/>
                        <h1><FormattedMessage id="ApplyInConfidence" /></h1>
                        <p><FormattedMessage id="ApplyInConfidenceParagraph" /></p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default WhyCitizenshipway;