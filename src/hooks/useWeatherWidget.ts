import { useEffect, useMemo } from 'react';

import { usedTypedSelector } from './usedTypedSelector';
import { useActions } from './useAction';
import { getWeek } from '../utils/getWeek';
import { weatherDataDestruct } from '../utils/weatherDataDestruct';

export const useWeatherWidget = () => {

  const { fetchWeatherAction } = useActions();

  const {
    error, locationData, loading, weatherData
  } = usedTypedSelector(state => state.weather);
  const { name, latitude, longitude, timezone, isLocated } = locationData;

  const { start, end, time } = useMemo(() => {
    return getWeek(timezone)
  }, [timezone]);


  useEffect(() => {
    if (name) { fetchWeatherAction({ latitude, longitude, timezone, start, end }) }
  }, [name]);

  const {
    weathercode,
    temperatureByHours,
    weatherCodes,
    days,
    hourlyTemperature
  } = useMemo(() => {
    return weatherDataDestruct(weatherData);
  }, [weatherData]);

  return {
    error, name, timezone, time, loading, weathercode, isLocated,
    temperatureByHours, weatherCodes, days, hourlyTemperature
  };
};