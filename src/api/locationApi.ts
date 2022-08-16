import axios from 'axios';

class LocationApi {
  public getCities
  constructor(url: string) {

    this.getCities = async (city: string) =>
      await axios.create({ baseURL: url }).get(`${url}${city}`)
  }
};

export const locationApi = new LocationApi('https://geocoding-api.open-meteo.com/v1/search?name=');
