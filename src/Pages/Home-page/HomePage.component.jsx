import React from "react";
import './HomePage.styles.scss'

import Header from "../../Components/Shared/Header/Header.component";
import ActionButton from "../../Components/Home/Action-Button/ActionButton.component";
import TextContent from "../../Components/Home/Text-Content/TextContent.components";

const HomePage = () => {
    return (
        <div id="home__page">
            <Header active="home" />
            <div className="content">
                <TextContent />
                <ActionButton />
            </div>
        </div>
    )
}


export default HomePage;