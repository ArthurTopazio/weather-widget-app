import { locationAPI } from './../../api/api';
import { LocationAction, LocationActionTypes } from './../../types/location-types';

import { Dispatch } from "redux";

export const FetchLocationAction = (location: string) => {
  return async (dispatch: Dispatch<LocationAction>) => {
    try {
      dispatch({ type: LocationActionTypes.FETCH_LOCATION });
      const response = await locationAPI.getLocations(location);
      dispatch({ type: LocationActionTypes.FETCH_LOCATION_SUCCESS, payload: response.results });
    } catch (e) {
      dispatch({
        type: LocationActionTypes.FETCH_LOCATION_ERROR, payload: 'Connection propblem'
      })
    }
  }
};

export function setLocationRequest(request: string): LocationAction {
  return { type: LocationActionTypes.SET_LOCATION_SEARCH_REQUEST, payload: request }
};