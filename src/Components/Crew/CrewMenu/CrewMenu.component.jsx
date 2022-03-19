import React, { useContext } from "react";

import './CrewMenu.styles.scss';
import CrewContext from "../../Context/CrewContext.component";


const CrewMenu = () => {

    const { setCurrentCrew, currentCrew } = useContext(CrewContext);

    function handleClick(e) {
        document.getElementById(`${currentCrew}`).classList.remove("active");
        setCurrentCrew(e.target.id);
        document.getElementById(`${e.target.id}`).classList.add("active");
    }

    return (
        <div className="crew__menu">
            <div onClick={handleClick} className="menu__item active" id="0"></div>
            <div onClick={handleClick} className="menu__item" id="1"></div>
            <div onClick={handleClick} className="menu__item" id="2"></div>
            <div onClick={handleClick} className="menu__item" id="3"></div>
        </div>
    )
}

export default CrewMenu;