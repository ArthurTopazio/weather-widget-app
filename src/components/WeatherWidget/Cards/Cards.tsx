import moment from 'moment';

import { getPictureByWeathercode } from '../../../utils/getPictByWeathercode';

import style from './Cards.module.scss';

interface CardTPD {
  weatherCode: string,
  day: string,
  temperatureByHour: any[],
  today?: boolean,
};

const Card: React.FC<CardTPD> = ({
  weatherCode,
  day,
  temperatureByHour,
  today = false
}) => {

  const pictureSrc = getPictureByWeathercode(weatherCode);


  return (
    <div className={`${style.week__cards_item} ${today ? style.today : null}`}>
      <p className={style.cards__item_day} >
        {moment(day).format('dddd').slice(0, 3)}
      </p>
      <img
        className={`${style.cards__item_img} ${today ? style.img__today : null}`}
        src={pictureSrc}
        alt='pict'
      />
      <p className={style.cards__item_tempDay}>
        {`${temperatureByHour[12]}`}
      </p>
      <p className={style.cards__item_tempNight}>
        {`${temperatureByHour[4]}`}
      </p>
    </div>
  )
};

interface CardsTPD {
  weatherCodes: any[],
  days: any[],
  hourlyTemperature: any[],
};

const Cards: React.FC<CardsTPD> = ({ weatherCodes, days, hourlyTemperature }) => {

  const cardsElements = days.map((item, index) => <Card key={item} {
    ...{
      day: item,
      today: (index == 0) ? true : false,
      weatherCode: weatherCodes[index],
      temperatureByHour: [...hourlyTemperature.splice(0, 24)],
    }
  } />)

  return (
    <div className={style.week__cards} >
      <p className={style.week__cards_text}>7-Day Forecast</p>
      <div className={style.week__cards_items}>
        {cardsElements}
      </div>
    </div>
  )
};

export default Cards;