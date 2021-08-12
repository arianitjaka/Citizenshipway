import React from 'react';
import './CitizenshipResidenceOptions.scss';
import { FormattedMessage } from 'react-intl';


const CitizenshipResidenceOptions = () => {
    return (
        <div className="cr-options-div">
            <div className="cr-options-content">

                <div className="citizenship-option">
                    <div className="citizenship-option-content">
                        <h1><FormattedMessage id="EnhanceYourTravelFreedom" /></h1>
                        <hr />
                        <p><FormattedMessage id="EYTFPragraph" /></p>

                        <button className="citizenship-option-btn">
                            <h4><FormattedMessage id="EYTFPButton" /></h4>
                        </button>
                    </div>
                </div>

                <div className="residence-option">
                    <div className="residence-option-content">
                        <h1><FormattedMessage id="ExpandYourGlobalFootprint" /></h1>
                        <hr />
                        <p><FormattedMessage id="EYGFParagraph" /></p>

                        <button className="residence-option-btn">
                            <h4><FormattedMessage id="EYGFPButton" /></h4>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CitizenshipResidenceOptions;