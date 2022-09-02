import { useWeatherWidget } from '../../hooks/useWeatherWidget';

import WeatherWidgetHeader from '../WeatherWidgetHeader/WeatherWidgetHeader';
import WeatherWidgetTodayInfo from '../WeatherWidgetTodayInfo/WeatherWidgetTodayInfo';
import WeatherWidgetCards from '../WeatherWidgetCards/WeatherWidgetCards';
import Loader from '../UI/Loader/Loader';
import WidgetMenu from '../WidgetMenu/WidgetMenu';

import style from './WidgetBody.module.scss';

const WidgetBody: React.FC = () => {

  const {
    timezone, time, weathercode, temperatureByHours,
    weatherCodes, days, name, hourlyTemperature
  } = useWeatherWidget();

  const Body = () => {
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
        <WidgetMenu />
        {days ? <Body /> : <Loader variant='b' />}
      </div>
    </div>
  )
};

export default WidgetBody;