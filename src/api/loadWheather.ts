import axios from "axios";

export interface weatherRequest {
  latitude: number | null,
  longitude: number | null,
  timezone: string,
  start: string,
  end: string,
};

class WeatherApi {

  async getWeather({ latitude, longitude, timezone, start, end }: weatherRequest) {
    let resp = await axios
      .get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode&timezone=${timezone}&start_date=${start}&end_date=${end}`)
    return resp
  }
  constructor() {
  }
}



class LoadWeather {
  baseUrl = "https://api.open-meteo.com/v1/forecast?hourly=temperature_2m&daily=weathercode"

  urlParams = {}

  getWeather = async ({ latitude, longitude, timezone, start, end }: weatherRequest) => {
    this.urlParams = { latitude, longitude, timezone, start, end }
    let string = this.getParamsString()
    let response = await axios.get(string)
    return response
  }

  getParamsString = () => {
    let arr = []
    for (const [key, value] of Object.entries(this.urlParams)) {
      arr.push(`&${key}=${value}`);
    }
    return arr.reduce((string, item) => string + item, this.baseUrl)
  }

  constructor() {
  }
};

export const weather = new LoadWeather();