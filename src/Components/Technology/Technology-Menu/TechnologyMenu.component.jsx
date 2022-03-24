import React, { useContext } from "react";

import './TechnologyMenu.styles.scss';
import TechnologyContext from "../../Context/TechnologyContext.component";

const TechnologyMenu = () => {
    const { currentTechnology, setCurrentTechnology } = useContext(TechnologyContext);

    function handleClick(e) {
        setCurrentTechnology(e.target.id);
    }

    (() => {
        for (let i = 0; i < 3; i++) {
            document.getElementById(`${i}`)?.classList.remove('active');
        }
        document.getElementById(`${currentTechnology}`)?.classList.add("active");
    })()

    return (
        <div className="technology__menu">
            <button onClick={handleClick} className="heading-4 active" id="0">1</button>
            <button onClick={handleClick} className="heading-4" id="1">2</button>
            <button onClick={handleClick} className="heading-4" id="2">3</button>
        </div>
    )
}

export default TechnologyMenu;