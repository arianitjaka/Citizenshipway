import React from 'react';
import './Programs.scss';
import Vanuatu from '../../../../Assets/Home/Programs/vanuatu.png';
import Grenada from '../../../../Assets/Home/Programs/grenada.png';
import Austria from '../../../../Assets/Home/Programs/austria.png';
import AusantiguaBarbudatria from '../../../../Assets/Home/Programs/antigua-barbuda.png';
import Dominica from '../../../../Assets/Home/Programs/dominica.png';
import Malta from '../../../../Assets/Home/Programs/malta.png';
import StLucia from '../../../../Assets/Home/Programs/st-lucia.png';
import KittsNevis from '../../../../Assets/Home/Programs/kitts-nevis.png';

import { FormattedMessage } from 'react-intl';


const SharedPrograms = () => {
    return (
        <div>

            <div className="programs-tabs-content">
                <div className="programs-tabs-citizenship">
                    <img src={Vanuatu} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="VanatuCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="VanatuInfo" /> <br />
                            <span><FormattedMessage id="VanatuPrice" /></span>
                        </p>
                    </div>
                </div>


                <div className="programs-tabs-citizenship">
                    <img src={Grenada} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="GrenadaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="GrenadaInfo" /> <br />
                            <span><FormattedMessage id="GreanadaPrice" /></span>
                        </p>
                    </div>
                </div>


                <div className="programs-tabs-citizenship">
                    <img src={Austria} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="AustriaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="AustriaInfo" /> <br />
                            <span><FormattedMessage id="AustriaPrice" /></span>
                        </p>
                    </div>
                </div>


                <div className="programs-tabs-citizenship">
                    <img src={AusantiguaBarbudatria} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="AntiguaBarbudaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="AntiguaBarbudaInfo" /> <br />
                            <span><FormattedMessage id="AntiguaBarbudaPrice" /></span>
                        </p>
                    </div>
                </div>


                <div className="programs-tabs-citizenship">
                    <img src={Dominica} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="DominicaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="DominicaInfo" /> <br />
                            <span><FormattedMessage id="DominicaPrice" /></span>
                        </p>
                    </div>
                </div>


                <div className="programs-tabs-citizenship">
                    <img src={Malta} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="MaltaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="MaltaInfo" /> <br />
                            <span><FormattedMessage id="MaltaPrice" /></span>
                        </p>
                    </div>
                </div>


                <div className="programs-tabs-citizenship">
                    <img src={StLucia} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="StLuciaCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="StLuciaInfo" /> <br />
                            <span><FormattedMessage id="StLuciaPrice" /></span>
                        </p>
                    </div>
                </div>


                <div className="programs-tabs-citizenship">
                    <img src={KittsNevis} alt="" />

                    <div className="city-name">
                        <h5><FormattedMessage id="StKittsNevisCity" /></h5>
                    </div>

                    <div className="city-info">
                        <p><FormattedMessage id="StKittsNevisInfo" /> <br />
                            <span><FormattedMessage id="StKittsNevisPrice" /></span>
                            </p>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default SharedPrograms;