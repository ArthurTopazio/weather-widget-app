import { AxiosError } from 'axios';

import { locationAPI } from '../../api/api';
import { LocationAction, LocationActionTypes } from '../../types/location-types';

import { Dispatch } from "redux";

export const FetchLocationAction = (location: string) => {

  return async (dispatch: Dispatch<LocationAction>) => {

    try {
      dispatch({ type: LocationActionTypes.FetchLocation });
      const response = await locationAPI.getLocations(location);
      dispatch({ type: LocationActionTypes.FetchLocationSuccess, payload: response.results });
    } catch (e: unknown) {
      const error = e as AxiosError;
      dispatch({
        type: LocationActionTypes.FetchLocationError, payload: error.message,
      })
    }
  }
};