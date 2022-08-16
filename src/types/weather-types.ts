export interface LocationData {
  name: string,
  latitude: null | number,
  longitude: null | number,
  timezone: string,
};

export interface WeatherState {
  locationData: LocationData,
  loading: boolean,
  weatherData: any[],
  error: null | string,
};

export enum WeatherActionTypes {
  FetchLocationData = 'FETCH_LOCATION_DATA',
  FetchWeatherData = 'FETCH_WEATHER_DATA',
  FetchWeatherSuccess = 'FETCH_WEATHER_SUCCESS',
  FetchWeatherError = 'FETCH_WEATHER_ERROR',
};

interface FetchLocationDataAction {
  type: WeatherActionTypes.FetchLocationData,
  payload: LocationData,
};

interface FetchWeatherAction {
  type: WeatherActionTypes.FetchWeatherData,
};

interface FetchWeatherSuccessAction {
  type: WeatherActionTypes.FetchWeatherSuccess,
  payload: any[],
};

interface FetchWeatherErrorAction {
  type: WeatherActionTypes.FetchWeatherError,
  payload: string,
};

export type WeatherAction = FetchLocationDataAction
  | FetchWeatherSuccessAction
  | FetchWeatherAction
  | FetchWeatherErrorAction;