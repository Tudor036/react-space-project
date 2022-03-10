import React, { useContext } from "react";

import './Hamburger.styles.scss';
import MenuContext from "../../Context/MenuContext.component";

const Hamburger = () => {

    const { currentMenuState, setMenuState } = useContext(MenuContext);

    function handleMenuStateChange() {
        if (!currentMenuState) {
            setMenuState(!currentMenuState);
        }
    }

    return (
        <button className="hamburger__wrapper" onClick={handleMenuStateChange}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
        </button>
    )
}

export default Hamburger;