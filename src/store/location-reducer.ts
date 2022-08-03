import { LocationState, LocationAction, LocationActionTypes } from '../types/location-types';

const initialState: LocationState = {
  search_result: [],
  loading: false,
  search_reguest: '',
  error: '',
};

export const locationReducer = (state: LocationState = initialState, action: LocationAction): LocationState => {
  switch (action.type) {
    case LocationActionTypes.FetchLocation:
      return { ...state, loading: true }
    case LocationActionTypes.FetchLocationSuccess:
      return { ...state, loading: false, search_result: action.payload }
    case LocationActionTypes.FetchLocationError:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  };
};