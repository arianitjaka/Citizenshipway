import React from 'react';
import './ResidenceBottom.scss';
import womanPic from '../../../../Assets/Residency/woman.png';
import DoubleQuoteIcon from '../../../../Assets/Residency/double-quote.png';
import LinePic from '../../../../Assets/Residency/line.png';

import { FormattedMessage } from 'react-intl';



const ResidenceBottom = () => {
    return (
        <div className="residence-bottom">

            <div className="rb-content">
                <div className="rb-photo">
                    <img src={womanPic} alt="" />
                </div>

                <div className="rb-info">
                    <div className="rb-big-line-right"></div>
                    <div className="rb-text">
                        <img src={DoubleQuoteIcon} alt="" />
                        <p><FormattedMessage id="TestimonialsInfo" /></p>
                        <p className="rb-date">
                            <img src={LinePic} alt="" />
                            <FormattedMessage id="TestimonialsDate" />
                        </p>
                    </div>
                    <div className="rb-big-line-left"></div>
                </div>

            </div>


        </div>
    );
}

export default ResidenceBottom;