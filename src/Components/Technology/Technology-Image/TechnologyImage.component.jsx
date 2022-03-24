import React, { useContext } from "react";
import './TechnologyImage.styles.scss';
import TechnologyContext from "../../Context/TechnologyContext.component";

const TechnologyImage = () => {

    const frame = window.screen.width < 1024 ? 'landscape' : 'portrait';
    const { activeTechnology } = useContext(TechnologyContext);
    const name = activeTechnology.name.toLowerCase().replace(" ", "-");

    return (
        <div className="technology__image">
            <img src={require(`../../../Assets/technology/image-${name}-${frame}.jpg`)} alt="" />
        </div>
    )
}

export default TechnologyImage;