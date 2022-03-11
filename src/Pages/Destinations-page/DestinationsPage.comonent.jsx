import React from "react";
import './DestinationsPage.styles.scss'

import Header from "../../Components/Shared/Header/Header.component";

const DestinationsPage = () => {
    return (
        <div id="destinations__page">
            <Header active="destinations" />
            <div className="content">
                <div className="text__content"></div>
                <img src={``} alt="" />
            </div>
        </div>
    )
}

export default DestinationsPage;