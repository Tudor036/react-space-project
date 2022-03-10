import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/Home-page/HomePage.component';
import DestinationsPage from './Pages/Destinations-page/DestinationsPage.comonent';
import CrewPage from './Pages/Crew-page/CrewPage.component';
import TechnologyPage from './Pages/Technology-page/TechnologyPage.component';

import MenuState from './Components/MenuContext.component';

function App() {

  const [menu, setMenu] = useState(false);
  
  return (
    <MenuState.Provider setter={setMenu} value={menu}>
      <Router>
        <div className="App">

          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/home" element={<HomePage/>}/>
            <Route path='/destinations' element={<DestinationsPage/>}/>
            <Route path='/crew' element={<CrewPage/>}/>
            <Route path='/technology' element={<TechnologyPage/>}/>
          </Routes>

        </div>
      </Router>
    </MenuState.Provider>
  );
}

export default App;