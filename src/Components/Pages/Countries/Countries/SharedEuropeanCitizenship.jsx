import React from 'react';
import './CitizenshipCountries.scss';

import Malta from '../../../../Assets/Countries/cities/malta.png';
import Montenero from '../../../../Assets/Countries/cities/montenegro.png';
import Turkey from '../../../../Assets/Countries/cities/turkey.png';

import Arrow from '../../../../Assets/Countries/arrow.png';

import { FormattedMessage } from 'react-intl';


const SharedEuropenCitizenship = () => {
    return (
        <div>

            <div className="european-citizenship">
                <div className="ec-title">
                    <h1><FormattedMessage id="EuropeanCitizenship" /></h1>
                </div>

                <div className="ec-cities">

                    <div className="ec-special-city">
                        <div className="special-city-name">
                            <h1><FormattedMessage id="AustriaCity" /></h1>
                        </div>

                        <div className="special-city-info">
                            <p><FormattedMessage id="EuropenAustriaParagraph" /></p>
                        </div>


                        <div className="ec-city-more-info">
                            <h1><FormattedMessage id="EuropeanMoreInfo" /></h1>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>



                    <div className="ec-cities-content">
                        <img src={Malta} alt="" />
                        <h1><FormattedMessage id="MaltaCity" /></h1>
                    </div>

                    <div className="ec-cities-content">
                        <img src={Montenero} alt="" />
                        <h1><FormattedMessage id="MontenegroCity" /></h1>
                    </div>

                    <div className="ec-cities-content">
                        <img src={Turkey} alt="" />
                        <h1><FormattedMessage id="TurkeyCity" /></h1>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SharedEuropenCitizenship;