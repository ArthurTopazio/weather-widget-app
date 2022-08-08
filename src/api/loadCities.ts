import axios from "axios";

class CitiesApi {
  getCities
  constructor(url: string) {

    this.getCities = async (city: string) =>
      await axios.create({ baseURL: url }).get(`${url}${city}`)
  }
};

export const cities = new CitiesApi("https://geocoding-api.open-meteo.com/v1/search?name=")
