import { useMemo } from 'react';

import Dushboard from '../Dushboard/Dushboard';

import style from './TodayInfo.module.scss';
import mainTheme from '../../../assets/vectors/main_theme.png';


interface TodayInfoTPD {
  time: string,
  weathercode: number | string,
  temperatureByHours: any[],
};

const TodayInfo: React.FC<TodayInfoTPD> = ({
  time,
  weathercode,
  temperatureByHours
}) => {

  const hour = +time.slice(0, 2);

  const dushboard = useMemo(() => {
    return <Dushboard data={temperatureByHours} />
  }, [temperatureByHours]);

  return (
    <>
      <div className={style.today__data}>
        <div className={style.today__data_temperature} >
          {`${temperatureByHours[hour]}°`}
        </div>
        <img
          className={style.today__data_img}
          src={mainTheme}
          alt='weather picture' />
      </div>
      <div className={style.dushboard}>
        {dushboard}
      </div>
    </>
  );
};

export default TodayInfo;