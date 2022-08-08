import * as LocationActionCreator from "./LocationActionCreator";
import * as WeatherActionCreator from "./WeatherActionCreator";

export default {
  ...LocationActionCreator,
  ...WeatherActionCreator,
};