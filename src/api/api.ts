import axios from 'axios';

class API {
  URL: string = '';
  instance() {
    let url = this.URL
    return axios.create({ baseURL: url })
  }
  async getData(request: string) {
    return await this.instance().get(`?name=${request}`).then((response: any) => { return response.data });
  }
};

export const locationAPI = new API();
locationAPI.URL = 'https://geocoding-api.open-meteo.com/v1/search';

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
  getWeatherWeekData({ latitude, longitude, timezone, start, end }: weatherRequest) {
    return instanceWeather
      .get(`?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode&timezone=${timezone}&start_date=${start}&end_date=${end}`)
      .then(response => { return response });
  },
};





