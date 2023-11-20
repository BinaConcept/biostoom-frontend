import axios from 'axios';
class LocationService {
	async getLocation() {
		console.log('GET');
		return axios
			.get('http://127.0.0.1:8000/api/location/')
			.then((res) => res.data) // Return the actual data
			.catch((error) => {
				console.log(error);
				throw error; // Re-throw the error to be caught in the component
			});
	}
	async getLocationByID(id) {
		console.log('GET ID =', id);
		return axios
			.get(`http://127.0.0.1:8000/api/location/${id}`)
			.then((result) => result.data)
			.catch((error) => console.log(error));
	}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new LocationService();
