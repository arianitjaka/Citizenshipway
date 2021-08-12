import React from 'react';
import './Services.scss';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import BusinessIcon from '@material-ui/icons/Business';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import { FormattedMessage } from 'react-intl';


const Services = () => {
    return (
        <div className="services-div">

            <div className="services-title">
                <h1 className="title-header">
                    <FormattedMessage id="Services" />
                </h1>
            </div>

            <div className="services-card">

                <div className="citizenship-by-investment">
                    <CardTravelIcon />
                    <h1 className="first-card-title">
                        <FormattedMessage id="CitizenshipByInvestments" />
                    </h1>
                    <p className="first-card-paragraph">
                        <FormattedMessage id="CBIParagraph" />
                    </p>
                </div>

                <div className="residence-permits">
                    <BusinessIcon />
                    <h1 className="second-card-title">
                        <FormattedMessage id="ResidencePermits" />
                    </h1>
                    <p className="second-card-paragraph">
                        <FormattedMessage id="RPParagraph" />
                    </p>
                </div>

                <div className="advisory-complience-services">
                    <RoomServiceIcon />
                    <h1 className="third-card-title">
                        <FormattedMessage id="AdvisoryComplienceServices" />
                    </h1>
                    <p className="third-card-paragraph">
                        <FormattedMessage id="ACSParagraph" />
                    </p>
                </div>
            </div>




        </div>
    );
}

export default Services;
