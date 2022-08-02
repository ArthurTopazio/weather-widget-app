import style from './WeatherWidgetCards.module.scss';
import moment from 'moment';

import image from '../../assets/vectors/main_theme.png';

interface CardProps {
  weatherCode: string,
  day: string,
  temperatureByHour: any[],
};

const Card: React.FC<CardProps> = (props: CardProps) => {

  const { weatherCode, day, temperatureByHour } = props;

  return (
    <div className={style.week__cards_item}>
      <p className={style.cards__item_day} >
        {moment(day).format('dddd').slice(0, 3)}
      </p>
      <img className={style.cards__item_img} src={image} alt="pict" />
      <p className={style.cards__item_tempDay}>
        {`${temperatureByHour[12]}`}
      </p>
      <p className={style.cards__item_tempNight}>
        {`${temperatureByHour[3]}`}
      </p>
    </div>
  )
};

interface CardsProps {
  weatherCodes: any[],
  days: any[],
  hourlyTemperature: any[],
};

const WeatherWidgetCards: React.FC<CardsProps> = (props: CardsProps) => {

  const { weatherCodes, days, hourlyTemperature } = props;

  const cardsElements = days.map((item, index) => <Card key={item} {
    ...{
      day: item,
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

export default WeatherWidgetCards;