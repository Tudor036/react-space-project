import React, { useContext } from "react";

import './DestinationText.styles.scss';

import DestinationContext from "../../Context/DestinationContext.conmponent";

const DestinationText = () => {

    const { activeDestination } = useContext(DestinationContext);

    return (
        <div className="destination__text">
            <p className="heading-2">{activeDestination.name}</p>
            <p>{activeDestination.description}</p>
            <div className="average__distance">
                <p className="sub-heading-2">Avg. distance</p>
                <p className="sub-heading-1">{activeDestination.distance}</p>
            </div>
            <div className="travel__time">
                <p className="sub-heading-2">est. travel time</p>
                <p className="sub-heading-1">{activeDestination.travel}</p>
            </div>
        </div>
    )
}

export default DestinationText;