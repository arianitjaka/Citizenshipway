import React from 'react';
import './LatestNews.scss';
import SharedLatestNews from './SharedLatestNews';
import icon from '../../../../Assets/Home/LatestNews/icon.png';

import { FormattedMessage } from 'react-intl';


const LatestNews = () => {
    return (
        <div className="latest-news">

            <div className="latest-news-title">
                <h1><FormattedMessage id="LatestNews" /></h1>
            </div>

            <SharedLatestNews />

            <div className="latest-news-read-more">
                <h1>
                    <FormattedMessage id="LNLink" />
                    <img src={icon} alt="" className="read-more-icon" />
                </h1>
            </div>

        </div>
    );
}

export default LatestNews;