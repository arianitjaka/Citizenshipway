import React from 'react';
import './GlobalCitizens.scss';
import people from '../../../../Assets/Home/GlobalCitizens/people.png';
import { FormattedMessage } from 'react-intl';


const GlobalCitizens = () => {
    return (
        <div className="container">

            <div className="left">
                <h1><FormattedMessage id="GlobalCitizens" /></h1>
                <p><FormattedMessage id="GCParagraph" /></p>

                <div className="left-btn">
                    <button className="learn-more-btn">
                        <h3><FormattedMessage id="GCButton" /></h3>
                    </button>
                </div>
            </div>

            <div className="right">
                <img src={people} alt="" />

                <div className="right-text">
                    <h3><FormattedMessage id="GCRightText" /></h3>
                </div>
            </div>

        </div>



    );
};

export default GlobalCitizens;

