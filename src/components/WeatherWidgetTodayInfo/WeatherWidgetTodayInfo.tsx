import style from './WeatherWidgetTodayInfo.module.scss';

import mainTheme from '../../assets/vectors/main_theme.png';
import WeatherWidgetDushboard from '../WeatherWidgetDushboard/WeatherWidgetDushboard';

interface WeatherTodayInfo {
  time: string,
  weathercode: number | string,
  temperatureByHours: any[],
}

const WeatherWidgetTodayInfo: React.FC<WeatherTodayInfo> = (props: WeatherTodayInfo) => {

  const { time, weathercode, temperatureByHours } = props;

  const hour = +time.slice(0, 2);

  console.log(time, weathercode, temperatureByHours)

  return (
    <>
      <div className={style.today__data}>
        <div className={style.today__data_temperature} >
          {`${temperatureByHours[hour]}°`}
        </div>
        <img className={style.today__data_img} src={mainTheme} alt="weather picture" />
      </div>
      <div className={style.dushboard}>
        <WeatherWidgetDushboard data={temperatureByHours} />
      </div>
    </>
  )
};

export default WeatherWidgetTodayInfo;