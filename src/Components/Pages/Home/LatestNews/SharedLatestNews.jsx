import React from 'react';
import './LatestNews.scss';
import pic1 from '../../../../Assets/Home/LatestNews/1.png';
import pic2 from '../../../../Assets/Home/LatestNews/2.png';
import pic3 from '../../../../Assets/Home/LatestNews/3.png';

import { FormattedMessage } from 'react-intl';


const SharedLatestNews = () => {
    return (
        <div>

            <div className="latest-news-content">
                <div className="latest-news-card">
                    <img src={pic1} alt="" />
                    <p className="card-date"><FormattedMessage id="LNLeftDate" /></p>
                    <h1 className="card-title"><FormattedMessage id="LNLeftTitle" /></h1>
                    <p className="card-paragraph"><FormattedMessage id="LNLeftParagraph" /></p>
                </div>

                <div className="latest-news-card">
                    <img src={pic2} alt="" />
                    <p className="card-date"><FormattedMessage id="LNCenterDate" /></p>
                    <h1 className="card-title"><FormattedMessage id="LNCenterTitle" /></h1>
                    <p className="card-paragraph"><FormattedMessage id="LNCenterParagraph" /></p>
                </div>

                <div className="latest-news-card">
                    <img src={pic3} alt="" />
                    <p className="card-date"><FormattedMessage id="LNRightDate" /></p>
                    <h1 className="card-title"><FormattedMessage id="LNRightTitle" /></h1>
                    <p className="card-paragraph"><FormattedMessage id="LNRightParagraph" /></p>
                </div>
            </div>

        </div>
    );
}

export default SharedLatestNews;