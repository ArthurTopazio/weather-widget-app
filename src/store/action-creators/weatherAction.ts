import { weatherAPI, weatherRequest } from './../../api/api';
import { WeatherAction, WeatherActionTypes, LocationData } from '../../types/weather-types';

import { Dispatch } from "redux";

export const FetchWeatherAction = (location: weatherRequest) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER_DATA });
      const response = await weatherAPI.getWeatherWeekData(location);
      dispatch({ type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: WeatherActionTypes.FETCH_WEATHER_ERROR, payload: 'Connection propblem'
      })
    }
  }
};

export function setLocationData(location: LocationData): WeatherAction {
  return { type: WeatherActionTypes.FETCH_LOCATION_DATA, payload: location }
};