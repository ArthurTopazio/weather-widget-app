import { useWeatherWidget } from '../../../hooks/useWeatherWidget';

import Header from '../Header/Header';
import TodayInfo from '../TodayInfo/TodayInfo';
import Cards from '../Cards/Cards';
import Loader from '../../UI/Loader/Loader';
import Menu from '../Menu/Menu';

import style from './WidgetBody.module.scss';

const WidgetBody: React.FC = () => {

  const {
    timezone, time, weathercode, temperatureByHours,
    weatherCodes, days, name, hourlyTemperature
  } = useWeatherWidget();

  const Body = () => {
    return (
      <>
        <Header {...{ name, timezone }} />
        <TodayInfo
          {...{ time, weathercode, temperatureByHours }} />
        <Cards
          {...{ weatherCodes, days, hourlyTemperature }} />
      </>
    )
  }

  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <Menu />
        {days ? <Body /> : <Loader variant='b' />}
      </div>
    </div>
  )
};

export default WidgetBody;