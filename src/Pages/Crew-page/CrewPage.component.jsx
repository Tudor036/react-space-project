import React from "react";

import './CrewPage.styles.scss';
import Header from "../../Components/Shared/Header/Header.component";
import Content from "../../Components/Crew/Content/Content.component";

const CrewPage = () => {
    return (
        <div id="crew__page">
            <Header active="crew" />
            <Content />
        </div>
    )
}

export default CrewPage;