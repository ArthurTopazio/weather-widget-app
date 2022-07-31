import { LocationState, LocationAction, LocationActionTypes } from '../types/location-types';

const initialState: LocationState = {
  search_result: [],
  loading: false,
  search_reguest: '',
  error: '',
}

//https://api.open-meteo.com/v1/forecast?latitude=42.7105&longitude=23.3238&hourly=temperature_2m&daily=weathercode&timezone=America/Chicago&start_date=2022-06-30&end_date=2022-07-06
/* 0	Clear sky
1, 2, 3	Mainly clear, partly cloudy, and overcast
45, 48	Fog and depositing rime fog
51, 53, 55	Drizzle: Light, moderate, and dense intensity
56, 57	Freezing Drizzle: Light and dense intensity
61, 63, 65	Rain: Slight, moderate and heavy intensity
66, 67	Freezing Rain: Light and heavy intensity
71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
77	Snow grains
80, 81, 82	Rain showers: Slight, moderate, and violent
85, 86	Snow showers slight and heavy
95 *	Thunderstorm: Slight or moderate
96, 99 *	Thunderstorm with slight and heavy hail */
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