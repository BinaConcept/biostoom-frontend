import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
// import { StartPage } from './pages/start/StartPage';
import { Location } from './pages/location/Location';
import { LocationList } from './pages/location/LocationList';
import StartPage from './pages/start/StartPage';
import { LocationDetails } from './pages/location/LocationDetails';

function App() {
	return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={''} >
          <Route path="/" element={<StartPage />} />
          <Route path="/location-list" element={<LocationList />} />
          <Route path="/location-detail/:id" element={<LocationDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
	);
}

export default App;
