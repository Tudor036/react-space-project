import React from "react";
import './DestinationsPage.styles.scss'

import Header from "../../Components/Shared/Header/Header.component";

const DestinationsPage = () => {
    return (
        <div id="destinations__page">
            <Header active="destinations" />
            <h1>Destinations Page</h1>
        </div>
    )
}

export default DestinationsPage;