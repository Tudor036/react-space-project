import React, { useState } from "react";

import './Content.styles.scss';
import data from '../../../Assets/data.json'

import DestinationContext from "../../Context/DestinationContext.conmponent";
import DestinationInfo from "../Destination-Info/DestinationInfo.component";

const Content = () => {

    const [currentDestination, setCurrentDestination] = useState('moon');
    const [activeDestination] = data.destinations.filter(obj => obj.name.toLowerCase() === currentDestination);

    return (
        <DestinationContext.Provider value={{ currentDestination, setCurrentDestination, activeDestination }}>
            <div className="content">
                {/* <img src={require("../../." + activeDestination.images.png)} alt="" /> */}
                <DestinationInfo />
            </div>
        </DestinationContext.Provider>
    )
}

export default Content;