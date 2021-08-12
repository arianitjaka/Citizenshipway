import React from 'react';
import './ResidencePlanning.scss';
import PlanningPic from '../../../../Assets/Residency/residence-planning.png';
import Arrow from '../../../../Assets/Residency/arrow.png';

import { FormattedMessage } from 'react-intl';


const ResidencePlanning = () => {
    return (
        <div className="residence-planning">

            <div className="rp-container">

                <div className="rp-left">
                    <img src={PlanningPic} alt="" />
                </div>

                <div className="rp-right">
                    <div className="rp-right-title">
                        <h1><FormattedMessage id="ResidencePlanning" /></h1>
                    </div>

                    <div className="rp-right-content">
                        <div className="rp-content-left">
                            <h1><FormattedMessage id="RPTitle" /></h1>
                            <p><FormattedMessage id="RPParagraphh" /></p>
                        </div>
                        <div className="rp-content-right">
                            <h1><FormattedMessage id="CPButton" /></h1>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                    <div className="rp-right-content">
                        <div className="rp-content-left">
                            <h1><FormattedMessage id="IPTitle" /></h1>
                            <p><FormattedMessage id="IPParagraphh" /></p>
                        </div>
                        <div className="rp-content-right">
                            <h1><FormattedMessage id="CPButton" /></h1>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                    <div className="rp-right-content">
                        <div className="rp-content-left">
                            <h1><FormattedMessage id="REOTitle" /></h1>
                            <p><FormattedMessage id="REOParagraph" /></p>
                        </div>
                        <div className="rp-content-right">
                            <h1><FormattedMessage id="CPButton" /></h1>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>

                </div>

            </div>



        </div>
    );
}

export default ResidencePlanning;