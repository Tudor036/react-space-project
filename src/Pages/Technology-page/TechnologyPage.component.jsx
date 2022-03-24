import React from "react";

import './TechnologyPage.styles.scss';
import Header from "../../Components/Shared/Header/Header.component";
import TechnologyImage from "../../Components/Technology/Technology-Image/TechnologyImage.component";
import Content from "../../Components/Technology/Content/Content.component";

const TechnologyPage = () => {
    return (
        <div id="technology__page">
            <Header active="technology" />
            <p className="heading-5 title"><b>03</b> Space launch 101</p>
            <Content />
        </div>
    )
}

export default TechnologyPage;