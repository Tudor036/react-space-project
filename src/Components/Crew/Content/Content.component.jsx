import React, { useState } from "react";
import './Content.styles.scss';

import data from '../../../Assets/data.json';

const Content = () => {

    const [crew, setCrew] = useState(data.crew);
    console.log(crew);

    return (
        <div className="crew-content">

        </div>
    )
}

export default Content;