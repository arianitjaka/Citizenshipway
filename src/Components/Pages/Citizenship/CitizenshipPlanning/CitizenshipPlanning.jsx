import React from 'react';
import './CitizenshipPlanning.scss';
import PlanningPic from '../../../../Assets/Citizenship/planning.png';
import Arrow from '../../../../Assets/Citizenship/arrow.png';

import { FormattedMessage } from 'react-intl';


const CitizenshipPlanning = () => {
    return (
        <div className="citizenship-planning">

            <div className="cp-container">

                <div className="cp-left">
                    <img src={PlanningPic} alt="" />
                </div>

                <div className="cp-right">
                    <div className="cp-right-title">
                        <h1><FormattedMessage id="CitizenshipPlanning" /></h1>
                    </div>

                        <div className="cp-right-content">
                            <div className="cp-content-left">
                                <h1><FormattedMessage id="CitizenshipByInvestmentOverview" /></h1>
                                <p><FormattedMessage id="CBIOParagraph" /></p>
                            </div>
                            <div className="cp-content-right">
                                <h1><FormattedMessage id="CPButton" /></h1>
                                <img src={Arrow} alt="" />
                            </div>
                        </div>

                        <div className="cp-right-content">
                            <div className="cp-content-left">
                                <h1><FormattedMessage id="WhyCitizenshipByInvestment" /></h1>
                                <p><FormattedMessage id="WhyCBIParagraph" /></p>
                            </div>
                            <div className="cp-content-right">
                                <h1><FormattedMessage id="CPButton" /></h1>
                                <img src={Arrow} alt="" />
                            </div>
                        </div>

                        <div className="cp-right-content">
                            <div className="cp-content-left">
                                <h1><FormattedMessage id="ImportantPoints" /></h1>
                                <p><FormattedMessage id="IPParagraph" /></p>
                            </div>
                            <div className="cp-content-right">
                                <h1><FormattedMessage id="CPButton" /></h1>
                                <img src={Arrow} alt="" />
                            </div>
                        </div>

                </div>

            </div>



        </div>
    );
}

export default CitizenshipPlanning;