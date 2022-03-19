import React, { useContext } from "react";

import './CrewImage.styles.scss';
import CrewContext from "../../Context/CrewContext.component";

const CrewImage = () => {
    const { activeCrew } = useContext(CrewContext);
    const name = activeCrew.name.toLowerCase().replace(" ", "-");
    console.log(name);

    return (
        <div className="crew__image">
            <img src={require(`../../../Assets/crew/image-${name}.png`)} alt="" />
        </div>
    )
}

export default CrewImage;