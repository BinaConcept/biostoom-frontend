import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartPage } from '../pages/start/StartPage';
import {LocationList} from '../pages/location/LocationList'
import {Location} from '../pages/location/Location'

export const PrivateRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<StartPage/>}></Route>
				<Route exact path="/about" element={<Location/>}></Route>
				<Route exact path="/contact" element={<LocationList/>}></Route>
			</Routes>
		</Router>
	);
};
