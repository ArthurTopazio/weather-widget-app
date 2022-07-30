import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { locationReducer } from "./location-reducer";

let reducers = combineReducers({
  location: locationReducer,
  //auth: 'd',
  //weather_data: 'd',
})

export type RootState = ReturnType<typeof reducers>

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

export default store