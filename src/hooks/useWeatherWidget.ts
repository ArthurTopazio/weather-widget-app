import { useEffect } from 'react';
import moment from 'moment-timezone';

import { usedTypedSelector } from './usedTypedSelector';
import { useActions } from './useAction';

export const useWeatherWidget = () => {

  const { FetchWeatherAction } = useActions();

  const {
    error, locationData, loading, weatherData
  } = usedTypedSelector(state => state.weather);

  const { name, latitude, longitude, timezone, isLocated } = locationData;

  const start = timezone ? moment().tz(timezone).format().slice(0, 10) : '';
  const end = timezone ? moment().tz(timezone).add(6, 'days').format().slice(0, 10) : '';
  const time = timezone ? moment().tz(timezone).format().slice(11, 16) : '';

  useEffect(() => {
    if (name) { FetchWeatherAction({ latitude, longitude, timezone, start, end }) }
  }, [name]);

  let weathercode, temperatureByHours, weatherCodes, days, hourlyTemperature;

  if (Object.keys(weatherData).length > 0) {
    weathercode = JSON.parse(JSON.stringify(weatherData)).daily.weathercode.splice(0, 1);
    temperatureByHours = JSON.parse(JSON.stringify(weatherData)).hourly.temperature_2m.splice(0, 24);
    weatherCodes = JSON.parse(JSON.stringify(weatherData)).daily.weathercode;
    days = JSON.parse(JSON.stringify(weatherData)).daily.time;
    hourlyTemperature = JSON.parse(JSON.stringify(weatherData)).hourly.temperature_2m;
  }

  return {
    error, name, timezone, time, loading, weathercode, isLocated,
    temperatureByHours, weatherCodes, days, hourlyTemperature
  };
};