import { LocationState, LocationAction, LocationActionTypes } from '../types/location-types'

const initialState: LocationState = {
  search_result: [],
  loading: false,
  search_reguest: '',
  error: '',
}

export const locationReducer = (state: LocationState = initialState, action: LocationAction): LocationState => {
  switch (action.type) {
    case LocationActionTypes.FETCH_LOCATION:
      return { ...state, loading: true }
    case LocationActionTypes.FETCH_LOCATION_SUCCESS:
      return { ...state, loading: false, search_result: action.payload }
    case LocationActionTypes.FETCH_LOCATION_ERROR:
      return { ...state, loading: false, error: action.payload }
    case LocationActionTypes.SET_LOCATION_SEARCH_REQUEST:
      return { ...state, search_reguest: action.payload }
    default:
      return state
  }
}