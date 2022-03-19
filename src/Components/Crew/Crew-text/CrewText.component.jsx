import React, { useContext } from "react";
import CrewContext from "../../Context/CrewContext.component";

import './CrewText.styles.scss';

const CrewText = () => {

    const { activeCrew } = useContext(CrewContext);

    return (
        <div className="crew__text">
            <p className="heading-4 role">{activeCrew.role}</p>
            <p className="heading-3 name">{activeCrew.name}</p>
            <p className="body-text">{activeCrew.bio}</p>
        </div>
    )
}

export default CrewText;