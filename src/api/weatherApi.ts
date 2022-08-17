import axios from 'axios';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&daily=weathercode';

export interface weatherRequest {
  latitude: number | null,
  longitude: number | null,
  timezone: string,
  start: string,
  end: string,
};

export default class WeatherApi {
  static async getWeather({ latitude, longitude, timezone, start, end }: weatherRequest) {
    const response = await axios.get(BASE_URL, {
      params: {
        latitude,
        longitude,
        timezone,
        start,
        end
      }
    });
    return response;
  }
};