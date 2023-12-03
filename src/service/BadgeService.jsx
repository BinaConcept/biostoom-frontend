
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

class BadgeService {
	async getBadgeAll() {
		try {
			NotificationManager.info('Succes opgehaald.', 'Badge lijst');
			const response = await axios.get(`http://127.0.0.1:8000/api/badge/`);
			return response.data;
		} catch (error) {
			console.error('Error het badge:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
	async getBadgeByID(id) {
		try {
			const response = await axios.get(
				`http://127.0.0.1:8000/api/badge/${id}`
			);

			if (response.status) {
				NotificationManager.info('Success opgehaald.', `${response.data.zone}`);
			}
			return response.data;
		} catch (error) {
			console.error('Error get badge id:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}

	async createBadge(data) {
		const response = await axios.post(
			`http://127.0.0.1:8000/api/badge/`,
			data
		);
		if (response.status) {
			NotificationManager.success(
				'Success aangemaakt.',
				`${response.data.zone}`
			);
		}
		console.log('Response Status:', response.status);
		return response.data;
	}
	async updateBadgeByID(id, data) {
		try {
			const response = await axios.patch(
				`http://127.0.0.1:8000/api/badge/${id}`,
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
export default new BadgeService();
