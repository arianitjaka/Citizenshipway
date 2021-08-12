import React from 'react';
import './Testimonials.scss';
import womanPic from '../../../../Assets/Home/Testimonials/woman.png';
import DoubleQuoteIcon from '../../../../Assets/Home/Testimonials/double-quote.png';
import LinePic from '../../../../Assets/Home/Testimonials/line.png';

import { FormattedMessage } from 'react-intl';



const Testimonials = () => {
    return (
        <div className="testimonials">

            <div className="testimonials-title">
                <h1><FormattedMessage id="TESTIMONIALS" /></h1>
            </div>

            <div className="testimonials-content">
                <div className="testimonials-photo">
                    <img src={womanPic} alt="" />
                </div>

                <div className="testimonials-info">
                    <div className="testimonials-big-line-right"></div>
                    <div className="testimonials-text">
                        <img src={DoubleQuoteIcon} alt="" />
                        <p><FormattedMessage id="TestimonialsInfo" /></p>
                        <p className="testimonials-date">
                            <img src={LinePic} alt="" />
                            <FormattedMessage id="TestimonialsDate" />
                        </p>
                    </div>
                    <div className="testimonials-big-line-left"></div>
                </div>

            </div>


        </div>
    );
}

export default Testimonials;