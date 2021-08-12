import React from 'react';
import './Values.scss';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PlaceIcon from '@material-ui/icons/Place';
import LockIcon from '@material-ui/icons/Lock';

import { FormattedMessage } from 'react-intl';


const Values = () => {
    return (
        <div className="values">

            <div className="values-title">
                <h1><FormattedMessage id="ValuesTitle" /></h1>
            </div>

            <div className="values-column">
                <div className="trust-column">
                    <VerifiedUserIcon />
                    <div className="trust-info">
                        <h1><FormattedMessage id="ValueLeftTitle" /></h1>
                        <p><FormattedMessage id="ValueLeftParagraph" /></p>
                    </div>

                </div>

                <div className="connection-column">
                    <PlaceIcon />
                    <div className="connection-info">
                        <h1><FormattedMessage id="ValueCenterTitle" /></h1>
                        <p><FormattedMessage id="ValueCenterParagraph" /></p>
                    </div>
                </div>

                <div className="confidentiality-column">
                    <LockIcon />
                    <div className="confidentiality-info">
                        <h1><FormattedMessage id="ValueRightTitle" /></h1>
                        <p><FormattedMessage id="ValueRightParagraph" /></p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Values;