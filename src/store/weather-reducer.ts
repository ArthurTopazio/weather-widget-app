import { WeatherState, WeatherAction, WeatherActionTypes } from '../types/weather-types';

const initialState: WeatherState = {
  location_data: {
    name: '',
    latitude: null,
    longitude: null,
    timezone: ''
  },
  loading: false,
  weather_data: [],
  error: '',
};

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
export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER_DATA:
      return { ...state, loading: true }
    case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
      return { ...state, loading: false, weather_data: action.payload }
    case WeatherActionTypes.FETCH_WEATHER_ERROR:
      return { ...state, loading: false, error: action.payload }
    case WeatherActionTypes.FETCH_LOCATION_DATA:
      return { ...state, location_data: action.payload }
    default:
      return state
  }
};