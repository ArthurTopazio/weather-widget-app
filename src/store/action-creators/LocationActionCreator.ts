import { AxiosError } from "axios";
import { Dispatch } from "redux";

import { locationApi } from "../../api/locationApi";
import { LocationAction, LocationActionTypes } from "../../types/location-types";

export const FetchLocationAction = (location: string) => {

  return async (dispatch: Dispatch<LocationAction>) => {

    try {
      dispatch({ type: LocationActionTypes.FetchLocation });
      const response = await locationApi.getCities(location);
      dispatch({ type: LocationActionTypes.FetchLocationSuccess, payload: response.data?.results });
    } catch (e: unknown) {
      const error = e as AxiosError;
      dispatch({
        type: LocationActionTypes.FetchLocationError, payload: error.message,
      })
    }
  }
};