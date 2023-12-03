import axios from 'axios';
import { NotificationManager } from 'react-notifications';

class LocationService {
	async getLocation() {
		try {
			NotificationManager.info('Succes opgehaald.', 'Locatie lijst');
			const response = await axios.get(`http://127.0.0.1:8000/api/location/`);
			return response.data;
		} catch (error) {
			console.error('Error het location:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
	async getLocationByID(id) {
		try {
			const response = await axios.get(
				`http://127.0.0.1:8000/api/location/${id}`
			);

			if (response.status) {
				NotificationManager.info('Success opgehaald.', `${response.data.name}`);
			}
			return response.data;
		} catch (error) {
			console.error('Error get location id:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}

	async createLocation(data) {
		const response = await axios.post(
			`http://127.0.0.1:8000/api/location/`,
			data
		);
		console.log(response);
		if (response.status) {
			NotificationManager.success(
				'Success aangemaakt.',
				`${response.data.name}`
			);
		}
		return response.data;
	}
	async updateLocationByID(id, data) {
		try {
			const response = await axios.patch(
				`http://127.0.0.1:8000/api/location/${id}`,
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
			console.error('Error update loaction:', error);
			throw error; // Als je de fout wilt doorgeven naar de aanroepende code
		}
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new LocationService();
