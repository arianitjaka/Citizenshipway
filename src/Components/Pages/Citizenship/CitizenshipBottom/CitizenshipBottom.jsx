import React from 'react';
import './CitizenshipBottom.scss';
import womanPic from '../../../../Assets/Citizenship/woman.png';
import DoubleQuoteIcon from '../../../../Assets/Citizenship/double-quote.png';
import LinePic from '../../../../Assets/Citizenship/line.png';

import { FormattedMessage } from 'react-intl';



const CitizenshipBottom = () => {
    return (
        <div className="citizenship-bottom">

            <div className="cb-content">
                <div className="cb-photo">
                    <img src={womanPic} alt="" />
                </div>

                <div className="cb-info">
                    <div className="cb-big-line-right"></div>
                    <div className="cb-text">
                        <img src={DoubleQuoteIcon} alt="" />
                        <p><FormattedMessage id="TestimonialsInfo" /></p>
                        <p className="cb-date">
                            <img src={LinePic} alt="" />
                            <FormattedMessage id="TestimonialsDate" />
                        </p>
                    </div>
                    <div className="cb-big-line-left"></div>
                </div>

            </div>


        </div>
    );
}

export default CitizenshipBottom;