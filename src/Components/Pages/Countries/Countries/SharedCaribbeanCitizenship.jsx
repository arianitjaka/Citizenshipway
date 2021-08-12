import React from 'react';
import './CitizenshipCountries.scss';

import AntiguaAndBarbuda from '../../../../Assets/Countries/cities/antigua-barbuda.png';
import Dominica from '../../../../Assets/Countries/cities/dominica.png';
import Grenada from '../../../../Assets/Countries/cities/grenada.png';
import StKittsNevis from '../../../../Assets/Countries/cities/kitts-nevis.png';

import { FormattedMessage } from 'react-intl';



const SharedCaribbeanCitizenship = () => {
    return (
        <div>

            <div className="caribbean-citizenship">
                <div className="cc-title">
                    <h1><FormattedMessage id="CaribbeanCitizenship" /></h1>
                </div>

                <div className="cc-cities">

                    <div className="ec-cities-content">
                        <img src={AntiguaAndBarbuda} alt="" />
                        <h1><FormattedMessage id="AntiguaBarbudaCity" /></h1>
                    </div>

                    <div className="cc-cities-content">
                        <img src={Dominica} alt="" />
                        <h1><FormattedMessage id="DominicaCity" /></h1>
                    </div>

                    <div className="cc-cities-content">
                        <img src={Grenada} alt="" />
                        <h1><FormattedMessage id="GrenadaCity" /></h1>
                    </div>

                    <div className="cc-cities-content">
                        <img src={StKittsNevis} alt="" />
                        <h1><FormattedMessage id="StKittsNevisCity" /></h1>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default SharedCaribbeanCitizenship;