export interface LocationState {
  search_result: any[],
  loading: boolean,
  error: null | string,
  search_reguest: string,
}

export enum LocationActionTypes {
  FETCH_LOCATION = 'FETCH_LOCATION',
  FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS',
  FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR',
  SET_LOCATION_SEARCH_REQUEST = 'SET_LOCATION_SEARCH_REQUEST',
}

interface FetchLocationAction {
  type: LocationActionTypes.FETCH_LOCATION
}

interface FetchLocationSuccessAction {
  type: LocationActionTypes.FETCH_LOCATION_SUCCESS,
  payload: any[],
}

interface FetchLocationErrorAction {
  type: LocationActionTypes.FETCH_LOCATION_ERROR,
  payload: string,
}

interface SetLocationSearchRequestAction {
  type: LocationActionTypes.SET_LOCATION_SEARCH_REQUEST,
  payload: string,
}

export type LocationAction = FetchLocationAction
  | FetchLocationSuccessAction
  | FetchLocationErrorAction
  | SetLocationSearchRequestAction