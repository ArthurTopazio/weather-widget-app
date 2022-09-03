import { Dispatch } from 'redux';
import { AxiosError } from 'axios';

import { WeatherAction, WeatherActionTypes, LocationData } from '../../types/weather-types';
import WeatherApi, { weatherRequest } from '../../api/weatherApi';

export const fetchWeatherAction = (locationData: weatherRequest) => {
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
  localStorage.setItem('isLocated', 'true');
  localStorage.setItem('latitude', `${location.latitude}`);
  localStorage.setItem('longitude', `${location.longitude}`);
  localStorage.setItem('name', `${location.name}`);
  localStorage.setItem('timezone', `${location.timezone}`);
  return { type: WeatherActionTypes.FetchLocationData, payload: location }
};

export function changeLocation() {
  localStorage.removeItem('isLocated');
  localStorage.removeItem('latitude');
  localStorage.removeItem('longitude');
  localStorage.removeItem('name');
  localStorage.removeItem('timezone');
  const unlocate = { isLocated: false, name: '', latitude: null, longitude: null, timezone: '' }
  return { type: WeatherActionTypes.FetchLocationData, payload: unlocate }
};