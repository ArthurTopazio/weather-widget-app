export interface LocationState {
  search_result: any[],
  loading: boolean,
  error: null | string,
  search_reguest: string,
};

export enum LocationActionTypes {
  FetchLocation = 'FETCH_LOCATION',
  FetchLocationSuccess = 'FETCH_LOCATION_SUCCESS',
  FetchLocationError = 'FETCH_LOCATION_ERROR',
};

interface FetchLocationAction {
  type: LocationActionTypes.FetchLocation
};

interface FetchLocationSuccessAction {
  type: LocationActionTypes.FetchLocationSuccess,
  payload: any[],
};

interface FetchLocationErrorAction {
  type: LocationActionTypes.FetchLocationError,
  payload: string,
};

export type LocationAction = FetchLocationAction
  | FetchLocationSuccessAction
  | FetchLocationErrorAction;