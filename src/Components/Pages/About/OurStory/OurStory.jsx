import React from 'react';
import './OurStory.scss';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import { FormattedMessage } from 'react-intl';


const OurStory = () => {
    return (
        <div className="our-story">

            <div className="os-content">

                <div className="os-info">
                    <div className="os-header">
                        <h1><FormattedMessage id="Story" /></h1>
                    </div>
                    <div className="os-title">
                        <h1><FormattedMessage id="StoryTitle" /></h1>
                    </div>
                    <div className="os-paragraph">
                        <p><FormattedMessage id="StoryParagraph" /></p>
                    </div>
                    <div className="os-btn">
                        <button className="btn-content">
                            <h1><FormattedMessage id="StoryButton" /></h1>
                        </button>
                    </div>
                </div>

                <div className="os-video">
                    <PlayCircleFilledIcon />
                </div>

            </div>



        </div>
    );
}

export default OurStory;
