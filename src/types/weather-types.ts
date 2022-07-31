export interface LocationData {
  name: string,
  latitude: null | number,
  longitude: null | number,
  timezone: string
};

export interface WeatherState {
  location_data: LocationData,
  loading: boolean,
  weather_data: any[],
  error: null | string
};

export enum WeatherActionTypes {
  FETCH_LOCATION_DATA = 'FETCH_LOCATION_DATA',
  FETCH_WEATHER_DATA = 'FETCH_WEATHER_DATA',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
};

interface FetchLocationDataAction {
  type: WeatherActionTypes.FETCH_LOCATION_DATA,
  payload: LocationData
};

interface FetchWeatherAction {
  type: WeatherActionTypes.FETCH_WEATHER_DATA,
};

interface FetchWeatherSuccessAction {
  type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
  payload: any[],
};

interface FetchWeatherErrorAction {
  type: WeatherActionTypes.FETCH_WEATHER_ERROR,
  payload: string,
};

export type WeatherAction = FetchLocationDataAction
  | FetchWeatherSuccessAction
  | FetchWeatherAction
  | FetchWeatherErrorAction;