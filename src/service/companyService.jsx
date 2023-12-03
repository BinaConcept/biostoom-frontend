import axios from 'axios';
import { NotificationManager } from 'react-notifications';

class CompanyService {
	async getCompanyAll() {
		try {
			NotificationManager.info('Succes opgehaald.', 'Company lijst');
			const response = await axios.get(`http://127.0.0.1:8000/api/company/`);
			return response.data;
		} catch (error) {
			console.error('Error het company:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
	async getCompanyByID(id) {
		try {
			const response = await axios.get(
				`http://127.0.0.1:8000/api/company/${id}`
			);

			if (response.status) {
				NotificationManager.info('Success opgehaald.', `${response.data.name}`);
			}
			return response.data;
		} catch (error) {
			console.error('Error get company id:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}

	async createCompany(data) {
		const response = await axios.post(
			`http://127.0.0.1:8000/api/company/`,
			data
		);
		if (response.status) {
			NotificationManager.success(
				'Success aangemaakt.',
				`${response.data.name}`
			);
		}
		return response.data;
	}
	async updateCompanyByID(id, data) {
		try {
			const response = await axios.patch(
				`http://127.0.0.1:8000/api/company/${id}`,
				data
			);
			if (response.status) {
				NotificationManager.success(
					'Success aangepast.',
					`${response.data.name}`
				);
			}
			return response.data;
		} catch (error) {
			console.error('Error update lotto:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CompanyService();
