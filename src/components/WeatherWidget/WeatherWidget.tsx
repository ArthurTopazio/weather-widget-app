import React, { useEffect } from "react";
import moment from 'moment-timezone';

import { useActions } from "../../hooks/useAction";
import { usedTypedSelector } from "../../hooks/usedTypedSelector";

import LocationForm from "../LocationForm/LocationForm";
import Modal from "../Modal/Modal";

import style from './WeatherWidget.module.scss';
import WeatherWidgetHeader from "../WeatherWidgetHeader/WeatherWidgetHeader";
import WeatherWidgetTodayInfo from "../WeatherWidgetTodayInfo/WeatherWidgetTodayInfo";
import WeatherWidgetCards from "../WeatherWidgetCards/WeatherWidgetCards";

const WeatherWidget: React.FC = () => {

  const { error, location_data, loading, loaded, weather_data } = usedTypedSelector(state => state.weather);

  const { name, latitude, longitude, timezone } = location_data;

  const { FetchWeatherAction } = useActions();

  let start = timezone ? moment().tz(timezone).format().slice(0, 10) : '';
  let end = timezone ? moment().tz(timezone).add(6, 'days').format().slice(0, 10) : '';
  let time = timezone ? moment().tz(timezone).format().slice(11, 16) : '';

  useEffect(() => {
    if (name) { FetchWeatherAction({ latitude, longitude, timezone, start, end }) }
  }, [name]);

  console.log(weather_data);

  return (
    <>
      {!name ? <Modal><LocationForm /></Modal>
        : <div className={style.body}>
          <div className={style.wrapper}>
            {loaded
              ? <>
                <WeatherWidgetHeader {...{ name, timezone }} />
                <WeatherWidgetTodayInfo
                  {...{
                    time,
                    weathercode: JSON.parse(JSON.stringify(weather_data)).daily.weathercode.splice(0, 1),
                    temperatureByHours: JSON.parse(JSON.stringify(weather_data)).hourly.temperature_2m.splice(0, 24)
                  }} />
                <WeatherWidgetCards {...{
                  weatherCodes: JSON.parse(JSON.stringify(weather_data)).daily.weathercode,
                  days: JSON.parse(JSON.stringify(weather_data)).daily.time,
                  hourlyTemperature: JSON.parse(JSON.stringify(weather_data)).hourly.temperature_2m,
                }} />
              </>
              : <p>loading...</p>}
          </div>
        </div>}
    </>
  )
};

export default WeatherWidget;