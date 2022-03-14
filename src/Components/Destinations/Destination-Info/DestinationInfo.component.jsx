import React from "react";

import './DestinationInfo.styles.scss';

import DestinationNavigation from "../Destination-Navigation/DestinationNavigation.component";
import DestinationText from "../Destination-text/DestinationText.component";

const DestinationInfo = () => {
    return (
        <div className="destination__info">
            <DestinationNavigation />
            <DestinationText />
        </div>
    )
}

export default DestinationInfo;