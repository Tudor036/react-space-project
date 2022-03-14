import React, { useState } from "react";

import './Content.styles.scss';
import data from '../../../Assets/data.json';

import DestinationContext from "../../Context/DestinationContext.conmponent";
import DestinationInfo from "../Destination-Info/DestinationInfo.component";

const Content = () => {

    const [currentDestination, setCurrentDestination] = useState('moon');
    const [activeDestination] = data.destinations.filter(obj => obj.name.toLowerCase() === currentDestination);
    const DestinationImage = activeDestination.images.png;

    return (
        <DestinationContext.Provider value={{ currentDestination, setCurrentDestination, activeDestination, DestinationImage }}>
            <div className="content-destination">
                <img src={require(`../../../Assets/destination/image-${activeDestination.name.toLowerCase()}.png`)} alt="" />
                <DestinationInfo />
            </div>
        </DestinationContext.Provider>
    )
}

export default Content;