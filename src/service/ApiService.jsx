import axios from 'axios';
import { NotificationManager } from 'react-notifications';

const url = 'http://127.0.0.1:8000/api';

class ApiService {
	showNotification(type) {
		switch (type) {
			case 'get':
				NotificationManager.info('Lijst opgehaald');
				break;
			case 'getID':
				NotificationManager.info('Enkel opject opgehaald');
				break;
			case 'create':
				NotificationManager.success('Nieuw aangemaakt');
				break;
			case 'updateID':
				NotificationManager.success('Success aangepast');
				break;
			default:
				break;
		}
	}
	async get(con) {
		try {
			this.showNotification('get');
			const response = await axios.get(`${url}/${con}/`);
			console.log(con,':',response)
			return response.data;
		} catch (error) {
			console.error(`Error ${con}:`, error);
			throw error;
		}
	}
	async getID(id, con ) {
		try {
			const response = await axios.get(`${url}/${con}/${id}`);

			if (response.status) {
				this.showNotification('getID');
			}
			return response.data;
		} catch (error) {
			console.error(`Error get ${con} id:`, error);
			throw error;
		}
	}

	async create(con, data) {
		const response = await axios.post(`${url}/${con}/`, data);
		if (response.status) {
			this.showNotification('create');
		}
		console.log('Response Status:', response.status);
		return response.data;
	}
	async updateID(id, con, data) {
		try {
			const response = await axios.patch(`${url}/${con}/${id}`, data);
			if (response.status) {
				this.showNotification('updateID');
			}
			return response.data;
		} catch (error) {
			console.error(`Error update ${con}:`, error);
			throw error;
		}
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiService();

