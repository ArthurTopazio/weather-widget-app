import WeatherWidgetDushboard from "../WeatherWidgetDushboard/WeatherWidgetDushboard";

import style from "./WeatherWidgetTodayInfo.module.scss";
import mainTheme from "../../assets/vectors/main_theme.png";

interface TodayInfoTPD {
  time: string,
  weathercode: number | string,
  temperatureByHours: any[],
};

const WeatherWidgetTodayInfo: React.FC<TodayInfoTPD> = ({ time, weathercode, temperatureByHours }) => {

  const hour = +time.slice(0, 2);

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
  );
};

export default WeatherWidgetTodayInfo;