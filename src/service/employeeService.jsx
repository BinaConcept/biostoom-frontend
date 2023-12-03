
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

class EmployeeService {
	async getEmployeeAll() {
		try {
			NotificationManager.info('Succes opgehaald.', 'Employee lijst');
			const response = await axios.get(`http://127.0.0.1:8000/api/employee/`);
			return response.data;
		} catch (error) {
			console.error('Error het badge:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
	async getEmployeeByID(id) {
		try {
			const response = await axios.get(
				`http://127.0.0.1:8000/api/employee/${id}`
			);

			if (response.status) {
				NotificationManager.info('Success opgehaald.', `${response.data.zone}`);
			}
			return response.data;
		} catch (error) {
			console.error('Error get employee id:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}

	async createEmployee(data) {
		const response = await axios.post(
			`http://127.0.0.1:8000/api/employee/`,
			data
		);
		if (response.status) {
			NotificationManager.success(
				'Success aangemaakt.',
				`${response.data.zone}`
			);
		}
		return response.data;
	}
	async updateEmployeeByID(id, data) {
		try {
			const response = await axios.patch(
				`http://127.0.0.1:8000/api/employee/${id}`,
				data
			);
			if (response.status) {
				NotificationManager.success(
					'Success aangepast.',
					`${response.data.zone}`
				);
			}
			return response.data;
		} catch (error) {
			console.error('Error update zone:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();

