import axios from 'axios';
import querystring from 'querystring';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&daily=weathercode';

export interface weatherRequest {
  latitude: number | null,
  longitude: number | null,
  timezone: string,
  start: string,
  end: string,
};

class LoadWeather {
  public getWeather = async ({ latitude, longitude, timezone, start, end }: weatherRequest) => {
    let str = BASE_URL + '&' + querystring.stringify({
      latitude,
      longitude,
      timezone,
      start,
      end
    })
    return await axios.get(str);
  }
};

export const weather = new LoadWeather();

/*
  getParamsString = () => {
    let arr = []
    for (const [key, value] of Object.entries(this.urlParams)) {
      arr.push(`&${key}=${value}`);
    }
    return arr.reduce((string, item) => string + item, this.baseUrl)
  } */