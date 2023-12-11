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
import { BadgeForm } from './pages/badge/BadgeForm';
import { BadgeList } from './pages/badge/BadgeList';
import { BadgeDetails } from './pages/badge/BadgeDetails';
import { LottoForm } from './pages/lotto/LottoForm';
import { LottoList } from './pages/lotto/LottoList';
import { LottoDetails } from './pages/lotto/LottoDetails';
import { CompanyForm } from './pages/company/CompanyForm';
import { CompanyList } from './pages/company/CompanyList';
import { CompanyDetails } from './pages/company/CompanyDetails';
import { EmployeeForm } from './pages/employee/EmployeeForm';
import { EmployeeList } from './pages/employee/EmployeeList';
import { EmployeeDetails } from './pages/employee/EmployeeDetails';
import { WorkpermitForm } from './pages/workpermit/WorkpermitForm';
import { WorkpermitList } from './pages/workpermit/WorkpermitList';
import { WorkpermitDetails } from './pages/workpermit/WorkpermitDetails';
import { WorkpermitExtern } from './pages/workpermit/WorkpermitExtern';
import Home from './pages/home/home';
import { SelectionPage } from './pages/extern/selection/SelectionPage';
import Login from './pages/login/Login';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route element={''}>
						<Route path="/" element={<StartPage />} />
						<Route path="/home" element={<Home />} />
						<Route path="/selectpage" element={<SelectionPage />} />

						<Route path="/location" element={<LocationForm />} />
						<Route path="/location/:id" element={<LocationForm />} />
						<Route path="/location-list" element={<LocationList />} />
						<Route path="/location-detail/:id" element={<LocationDetails />} />

						<Route path="/badge" element={<BadgeForm />} />
						<Route path="/badge/:id" element={<BadgeForm />} />
						<Route path="/badge-list" element={<BadgeList />} />
						<Route path="/badge-detail/:id" element={<BadgeDetails />} />

						<Route path="/lotto" element={<LottoForm />} />
						<Route path="/lotto/:id" element={<LottoForm />} />
						<Route path="/lotto-list" element={<LottoList />} />
						<Route path="/lotto-detail/:id" element={<LottoDetails />} />

						<Route path="/company" element={<CompanyForm />} />
						<Route path="/company/:id" element={<CompanyForm />} />
						<Route path="/company-list" element={<CompanyList />} />
						<Route path="/company-detail/:id" element={<CompanyDetails />} />

						<Route path="/employee" element={<EmployeeForm />} />
						<Route path="/employee/:id" element={<EmployeeForm />} />
						<Route path="/employee-list" element={<EmployeeList />} />
						<Route path="/employee-detail/:id" element={<EmployeeDetails />} />

						<Route path="/workpermit" element={<WorkpermitForm />} />
						<Route path="/workpermit/:id" element={<WorkpermitForm />} />
						<Route path="/workpermit-list" element={<WorkpermitList />} />
						<Route
							path="/workpermit-detail/:id"
							element={<WorkpermitDetails />}
						/>
						<Route path="/workpermitextern" element={<WorkpermitExtern />} />
						<Route path="/login" element={<Login />} />
					</Route>
				</Routes>{' '}
				<NotificationContainer />
			</BrowserRouter>
		</div>
	);
}

export default App;
