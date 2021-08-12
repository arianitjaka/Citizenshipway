import React from 'react';
import './CountriesCultures.scss';

import { FormattedMessage } from 'react-intl';


const CountriesCultures = () => {
    return (
        <div className="countries-cultures">

            <div className="cc-content">

                <div className="cc-header">
                    <div className="cc-left">
                        <h1><FormattedMessage id="CCLeftTitle" /></h1>
                    </div>
                    <div className="cc-right">
                        <h1><FormattedMessage id="CCRightTitle" /></h1>
                    </div>
                </div>

                <div className="cc-column">

                    <div className="cc-column-content">
                        <h1>2015</h1>
                        <p><FormattedMessage id="CCLeftColumn" /></p>
                    </div>

                    <div className="cc-column-content">
                        <h1>2017</h1>
                        <p><FormattedMessage id="CCCenterColumn" /></p>
                    </div>

                    <div className="cc-column-content">
                        <h1>2020</h1>
                        <p><FormattedMessage id="CCRightColumn" /></p>
                    </div>

                </div>



            </div>


        </div>
    );
}

export default CountriesCultures;