import React from 'react';
import './Banner.scss';
import { FormattedMessage } from 'react-intl';


const Banner = () => {
  return (
    <div className="banner-div">
      <h1 className="banner-text">
        <FormattedMessage id="HeaderTitle" />
      </h1>
      <p className="banner-paragraph">
        <FormattedMessage id="HeaderParagraph" />
      </p>

      <div className="banner-btn-div">
        <button className="banner-btn">
          <h3 className="banner-btn-text">
            <FormattedMessage id="HeaderButton" />
          </h3>
        </button>

      </div>
    </div>
  );
}

export default Banner;