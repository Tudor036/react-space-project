import React from "react";

import './DestinationsPage.styles.scss'

import Header from "../../Components/Shared/Header/Header.component";
import Content from "../../Components/Destinations/Content/Content.component";

const DestinationsPage = () => {
    return (
        <div id="destinations__page">
            <Header active="destinations" />
            <p className="heading-5"><b>01</b> Pick your destination</p>
            <Content />
        </div>
    )
}

export default DestinationsPage;