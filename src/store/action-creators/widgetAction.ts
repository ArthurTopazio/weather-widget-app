import { LocationAction, LocationActionTypes } from './../../types/location-types';

import axios from 'axios';
import { Dispatch } from "redux";

export const FetchLocationAction = (location: string) => {
  return async (dispatch: Dispatch<LocationAction>) => {
    try {
      dispatch({ type: LocationActionTypes.FETCH_LOCATION });
      const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`);
      dispatch({ type: LocationActionTypes.FETCH_LOCATION_SUCCESS, payload: response.data.results });
    } catch (e) {
      dispatch({
        type: LocationActionTypes.FETCH_LOCATION_ERROR, payload: 'Connection propblem'
      })
    }
  }
}

export function setLocationRequest(request: string): LocationAction {
  return { type: LocationActionTypes.SET_LOCATION_SEARCH_REQUEST, payload: request }
}