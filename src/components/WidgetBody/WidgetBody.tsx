import { useWeatherWidget } from "../../hooks/useWeatherWidget";

import WeatherWidgetHeader from "../WeatherWidgetHeader/WeatherWidgetHeader";
import WeatherWidgetTodayInfo from "../WeatherWidgetTodayInfo/WeatherWidgetTodayInfo";
import WeatherWidgetCards from "../WeatherWidgetCards/WeatherWidgetCards";
import Loader from "../Loader/Loader";

import style from "./WidgetBody.module.scss";

const WidgetBody: React.FC = () => {

  const {
    timezone, time, weathercode, temperatureByHours,
    weatherCodes, days, name, hourlyTemperature
  } = useWeatherWidget();

  let Body = () => {
    return (
      <>
        <WeatherWidgetHeader {...{ name, timezone }} />
        <WeatherWidgetTodayInfo
          {...{ time, weathercode, temperatureByHours }} />
        <WeatherWidgetCards
          {...{ weatherCodes, days, hourlyTemperature }} />
      </>
    )
  }

  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        {days ? <Body /> : <Loader />}
      </div>
    </div>
  )
};

export default WidgetBody;