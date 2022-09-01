import { useEffect } from 'react';

import { usedTypedSelector } from './usedTypedSelector';
import { useActions } from './useAction';
import { getWeek } from '../utils/getWeek';
import { weatherDataDestruct } from '../utils/weatherDataDestruct';

export const useWeatherWidget = () => {

  const { FetchWeatherAction } = useActions();

  const {
    error, locationData, loading, weatherData
  } = usedTypedSelector(state => state.weather);

  const { name, latitude, longitude, timezone, isLocated } = locationData;
  const { start, end, time } = getWeek(timezone);

  useEffect(() => {
    if (name) { FetchWeatherAction({ latitude, longitude, timezone, start, end }) }
  }, [name]);

  const {
    weathercode,
    temperatureByHours,
    weatherCodes,
    days,
    hourlyTemperature
  } = weatherDataDestruct(weatherData);

  return {
    error, name, timezone, time, loading, weathercode, isLocated,
    temperatureByHours, weatherCodes, days, hourlyTemperature
  };
};