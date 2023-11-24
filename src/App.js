import * as React from 'react';
// React Notification
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { StartPage } from './pages/start/StartPage';
import { LocationList } from './pages/location/LocationList';
import StartPage from './pages/start/StartPage';
import { LocationDetails } from './pages/location/LocationDetails';
import { LocationForm } from './pages/location/LocationForm';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={''}>
						<Route path="/" element={<StartPage />} />
						<Route path="/location" element={<LocationForm />} />
            <Route path="/location/:id" element={<LocationForm />} />
						<Route path="/location-list" element={<LocationList />} />
						<Route path="/location-detail/:id" element={<LocationDetails />} />
					</Route>
				</Routes>{' '}
				<NotificationContainer />
			</BrowserRouter>
		</div>
	);
}

export default App;
