import React, { useContext } from "react";

import './TechnologyText.styles.scss';
import TechnologyContext from "../../Context/TechnologyContext.component";

const TechnologyText = () => {
    const { activeTechnology } = useContext(TechnologyContext);

    return (
        <div className="technology__text">
            <p className="heading-5">The terminology...</p>
            <p className="heading-3">{activeTechnology.name}</p>
            <p className="body-text">{activeTechnology.description}</p>
        </div>
    )
}

export default TechnologyText;