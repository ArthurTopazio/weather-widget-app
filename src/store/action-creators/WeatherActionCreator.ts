import { Dispatch } from 'redux';
import { AxiosError } from 'axios';

import { WeatherAction, WeatherActionTypes, LocationData } from '../../types/weather-types';
import WeatherApi, { weatherRequest } from '../../api/weatherApi';

export const FetchWeatherAction = (locationData: weatherRequest) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.FetchWeatherData });
      const response = await WeatherApi.getWeather(locationData);
      dispatch({ type: WeatherActionTypes.FetchWeatherSuccess, payload: response.data });
    } catch (e) {
      const error = e as AxiosError;
      dispatch({
        type: WeatherActionTypes.FetchWeatherError, payload: error.message,
      })
    };
  };
};

export function setLocationData(location: LocationData): WeatherAction {
  return { type: WeatherActionTypes.FetchLocationData, payload: location }
};