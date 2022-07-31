import axios from 'axios';

const instanceLocation = axios.create({
  baseURL: 'https://geocoding-api.open-meteo.com/v1/search'
});

const instanceWeather = axios.create({
  baseURL: 'https://api.open-meteo.com/v1/forecast'
});

export const locationAPI = {
  getLocations(location: string) {
    return instanceLocation.get(`?name=${location}`)
      .then(response => { return response.data });
  },
};

export interface weatherRequest {
  latitude: number | null
  longitude: number | null
  timezone: string
  start: string
  end: string
}

export const weatherAPI = {
  getWeatherWeekData({ latitude, longitude, timezone, start, end }: weatherRequest) {
    return instanceWeather
      .get(`?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode&timezone=${timezone}&start_date=${start}&end_date=${end}`)
      .then(response => { return response });
  },
};