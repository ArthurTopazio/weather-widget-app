import axios from 'axios';

//test class api

class instanceAPI {

  URL
  getParam

  constructor(URL: string, getParam: string) {
    this.URL = URL
    this.getParam = getParam
  }

  instance() {
    let url = this.URL
    return axios.create({ baseURL: url })
  }

  async getData(request: string) {
    const param = this.getParam
    const response = await this.instance().get(`${param}${request}`);
    return response.data;
  }
};

export const locationAPI = new instanceAPI('https://geocoding-api.open-meteo.com/v1/search', '?name=');


//previus method

const instanceWeather = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/forecast'
});

export interface weatherRequest {
  latitude: number | null,
  longitude: number | null,
  timezone: string,
  start: string,
  end: string,
};

export const weatherAPI = {
  async getWeatherWeekData({ latitude, longitude, timezone, start, end }: weatherRequest) {
    const response = await instanceWeather
      .get(`?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode&timezone=${timezone}&start_date=${start}&end_date=${end}`);
    return response;
  },
};





