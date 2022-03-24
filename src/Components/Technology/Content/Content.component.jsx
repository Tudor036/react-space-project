import React, { useState } from "react";

import './Content.styles.scss';
import data from '../../../Assets/data.json';
import TechnologyImage from "../Technology-Image/TechnologyImage.component";
import TechnologyMenu from "../Technology-Menu/TechnologyMenu.component";
import TechnologyText from "../Technology-Text/TechnologyText.component";
import TechnologyContext from "../../Context/TechnologyContext.component";

const Content = () => {

    const technologyData = data.technology;
    const [currentTechnology, setCurrentTechnology] = useState(0);
    const activeTechnology = technologyData[currentTechnology];

    return (
        <TechnologyContext.Provider value={{ currentTechnology, setCurrentTechnology, activeTechnology }}>
            <div className="technology__content">
                <TechnologyImage />
                <div className="technology__info">
                    <TechnologyMenu />
                    <TechnologyText />
                </div>
            </div>
        </TechnologyContext.Provider>
    )
}
export default Content;