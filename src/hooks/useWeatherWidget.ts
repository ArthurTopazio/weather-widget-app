import { useEffect } from "react";
import moment from 'moment-timezone';

import { usedTypedSelector } from "./usedTypedSelector";
import { useActions } from "./useAction";

export const useWeatherWidget = () => {

  const { FetchWeatherAction } = useActions();

  const {
    error, location_data, loading, loaded, weather_data
  } = usedTypedSelector(state => state.weather);

  const { name, latitude, longitude, timezone } = location_data;

  const start = timezone ? moment().tz(timezone).format().slice(0, 10) : '';
  const end = timezone ? moment().tz(timezone).add(6, 'days').format().slice(0, 10) : '';
  const time = timezone ? moment().tz(timezone).format().slice(11, 16) : '';

  useEffect(() => {
    if (name) { FetchWeatherAction({ latitude, longitude, timezone, start, end }) }
  }, [name]);

  const weathercode = loaded
    ? JSON.parse(JSON.stringify(weather_data)).daily.weathercode.splice(0, 1)
    : null;

  const temperatureByHours = loaded
    ? JSON.parse(JSON.stringify(weather_data)).hourly.temperature_2m.splice(0, 24)
    : null;

  const weatherCodes = loaded
    ? JSON.parse(JSON.stringify(weather_data)).daily.weathercode
    : null;

  const days = loaded
    ? JSON.parse(JSON.stringify(weather_data)).daily.time
    : null;

  const hourlyTemperature = loaded
    ? JSON.parse(JSON.stringify(weather_data)).hourly.temperature_2m
    : null;

  return {
    error, name, timezone, time, loading, loaded, weathercode,
    temperatureByHours, weatherCodes, days, hourlyTemperature
  };
};