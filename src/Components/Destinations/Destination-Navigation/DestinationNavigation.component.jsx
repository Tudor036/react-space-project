import React, { useContext } from "react";

import './DestinationNavigation.styles.scss';
import data from '../../../Assets/data.json';

import DestinationContext from "../../Context/DestinationContext.conmponent";

const DestinationNavigation = () => {

    const { setCurrentDestination, activeDestination } = useContext(DestinationContext);
    const planets = data.destinations.map(obj => obj.name);

    return (
        <div className="destination__navigation">
            {planets.map((dest, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentDestination(dest.toLowerCase())}
                        className={`nav-text btn ${activeDestination.name.toLowerCase() === dest.toLowerCase() ? "active" : ""}`}
                    >{dest}</button>
                )
            })}
        </div>
    )
}

export default DestinationNavigation;