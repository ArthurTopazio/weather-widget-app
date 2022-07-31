import * as LocationActionCreator from './locationAction';
import * as WeatherActionCreator from './weatherAction';

export default {
  ...LocationActionCreator,
  ...WeatherActionCreator,
};