import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

// !!Proiect facut doar de Dragos

import "./App.css";

import HomePage from "./Pages/Home-page/HomePage.component";
import DestinationsPage from "./Pages/Destinations-page/DestinationsPage.comonent";
import CrewPage from "./Pages/Crew-page/CrewPage.component";
import TechnologyPage from "./Pages/Technology-page/TechnologyPage.component";

import Menu from "./Components/Menu/Menu.component";

import MenuContext from "./Components/Context/MenuContext.component";

function App() {
   const [currentMenuState, setMenuState] = useState(false);

   return (
      <MenuContext.Provider value={{ currentMenuState, setMenuState }}>
         <Router>
            <div className="App">
               {currentMenuState && window.screen.width < 768 ? <Menu /> : null}

               <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/home" element={<HomePage />} />
                  <Route path="/destinations" element={<DestinationsPage />} />
                  <Route path="/crew" element={<CrewPage />} />
                  <Route path="/technology" element={<TechnologyPage />} />
               </Routes>
            </div>
         </Router>
      </MenuContext.Provider>
   );
}

export default App;
