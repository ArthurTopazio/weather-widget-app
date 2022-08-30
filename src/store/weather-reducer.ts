import { WeatherState, WeatherAction, WeatherActionTypes } from '../types/weather-types';

const initialState: WeatherState = {
  locationData: {
    name: '',
    latitude: null,
    longitude: null,
    timezone: '',
    isLocated: false
  },
  loading: false,
  weatherData: [],
  error: '',
};

export const weatherReducer = (state: WeatherState = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case WeatherActionTypes.FetchWeatherData:
      return { ...state, loading: true }
    case WeatherActionTypes.FetchWeatherSuccess:
      return { ...state, loading: false, weatherData: action.payload }
    case WeatherActionTypes.FetchWeatherError:
      return { ...state, loading: false, error: action.payload }
    case WeatherActionTypes.FetchLocationData:
      return { ...state, locationData: action.payload }
    default:
      return state
  };
};

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