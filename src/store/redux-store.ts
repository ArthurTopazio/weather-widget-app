import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { locationReducer } from "./location-reducer";
import { weatherReducer } from "./weather-reducer";

let reducers = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
});

export type RootState = ReturnType<typeof reducers>;

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;