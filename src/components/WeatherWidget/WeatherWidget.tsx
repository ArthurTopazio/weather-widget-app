import React from "react";

import { useWeatherWidget } from "../../hooks/useWeatherWidget";

import LocationForm from "../LocationForm/LocationForm";
import Modal from "../Modal/Modal";
import WeatherWidgetHeader from "../WeatherWidgetHeader/WeatherWidgetHeader";
import WeatherWidgetTodayInfo from "../WeatherWidgetTodayInfo/WeatherWidgetTodayInfo";
import WeatherWidgetCards from "../WeatherWidgetCards/WeatherWidgetCards";
import Loader from "../Loader/Loader";

import style from './WeatherWidget.module.scss';


const WeatherWidget: React.FC = () => {

  const {
    name, timezone, time, loaded, weathercode,
    temperatureByHours, weatherCodes, days, hourlyTemperature
  } = useWeatherWidget();

  return (
    <>
      {!name ? <Modal><LocationForm /></Modal>
        : <div className={style.body}>
          <div className={style.wrapper}>
            {loaded
              ? <>
                <WeatherWidgetHeader {...{ name, timezone }} />
                <WeatherWidgetTodayInfo
                  {...{ time, weathercode, temperatureByHours }} />
                <WeatherWidgetCards
                  {...{ weatherCodes, days, hourlyTemperature }} />
              </>
              : <Loader />}
          </div>
        </div>}
    </>
  )
};

export default WeatherWidget;