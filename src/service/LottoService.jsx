import axios from 'axios';
import { NotificationManager } from 'react-notifications';

class LottoService {
	async getLottoAll() {
		try {
			NotificationManager.info('Succes opgehaald.', 'Lotto lijst');
			const response = await axios.get(`http://127.0.0.1:8000/api/lotto/`);
			console.log('Response Status:', response.status);
			return response.data;
		} catch (error) {
			console.error('Error het lotto:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
	async getLottoByID(id) {
		try {
			const response = await axios.get(
				`http://127.0.0.1:8000/api/lotto/${id}`
			);

			if (response.status) {
				NotificationManager.info('Success opgehaald.', `${response.data.name}`);
			}
			return response.data;
		} catch (error) {
			console.error('Error get lotto id:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}

	async createLotto(data) {
		const response = await axios.post(
			`http://127.0.0.1:8000/api/lotto/`,
			data
		);
		console.log(response);
		if (response.status) {
			NotificationManager.success(
				'Success aangemaakt.',
				`${response.data.name}`
			);
		}
		console.log('Response Status:', response.status);
		return response.data;
	}
	async updateLottoByID(id, data) {
		try {
			const response = await axios.patch(
				`http://127.0.0.1:8000/api/lotto/${id}`,
				data
			);
			console.log(response);
			if (response.status) {
				NotificationManager.success(
					'Success aangepast.',
					`${response.data.name}`
				);
			}
			console.log('Response Status:', response.status);
			return response.data;
		} catch (error) {
			console.error('Error update lotto:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new LottoService();
