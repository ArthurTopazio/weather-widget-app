import { WeatherState, WeatherAction, WeatherActionTypes } from '../types/weather-types';

const initialState: WeatherState = {
  locationData: {
    name: '',
    latitude: null,
    longitude: null,
    timezone: '',
    isLocated: false
  },
  loading: false,
  weatherData: [],
  error: '',
};

export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FetchWeatherData:
      return { ...state, loading: true }
    case WeatherActionTypes.FetchWeatherSuccess:
      return { ...state, loading: false, weatherData: action.payload }
    case WeatherActionTypes.FetchWeatherError:
      return { ...state, loading: false, error: action.payload }
    case WeatherActionTypes.FetchLocationData:
      return { ...state, locationData: action.payload }
    default:
      return state
  };
};