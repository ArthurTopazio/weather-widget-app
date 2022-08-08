import axios from "axios";

export interface weatherRequest {
  latitude: number | null,
  longitude: number | null,
  timezone: string,
  start: string,
  end: string,
};

class WeatherApi {
  getWeather
  constructor(url: string) {
    this.getWeather = async ({ latitude, longitude, timezone, start, end }: weatherRequest) =>
      await axios.create({ baseURL: url })
        .get(`${url}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode&timezone=${timezone}&start_date=${start}&end_date=${end}`)
  }
};

export const weather = new WeatherApi("https://api.open-meteo.com/v1/forecast");