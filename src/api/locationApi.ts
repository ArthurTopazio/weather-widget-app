import axios from 'axios';

export default class LocationApi {
  static async getCities(city: string) {
    const response = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
      params: {
        name: city
      }
    })
    return response
  }
};
