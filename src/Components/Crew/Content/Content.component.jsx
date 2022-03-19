import React, { useState } from "react";
import './Content.styles.scss';

import data from '../../../Assets/data.json';
import CrewText from "../Crew-text/CrewText.component";
import CrewMenu from "../CrewMenu/CrewMenu.component";
import CrewContext from "../../Context/CrewContext.component";
import CrewImage from "../CrewImage/CrewImage.component";

const Content = () => {

    const crew = data.crew;
    const [currentCrew, setCurrentCrew] = useState(0);
    const activeCrew = crew[currentCrew];

    return (
        <CrewContext.Provider value={{ currentCrew, setCurrentCrew, activeCrew }}>
            <div className="crew__content">
                <CrewImage />
                <div className="crew__info">
                    <CrewMenu />
                    <CrewText />
                </div>
            </div>
        </CrewContext.Provider>
    )
}

export default Content;