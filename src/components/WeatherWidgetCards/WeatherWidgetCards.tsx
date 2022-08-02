import style from './WeatherWidgetCards.module.scss';

import image from '../../assets/vectors/main_theme.png';

interface CardProps {
  weatherCode: string,
  day: string,
  temperatureByHour: any[],
};

const Card = () => {

  return (
    <div className={style.week__cards_item}>
      <p className={style.cards__item_day} >Mon</p>
      <img className={style.cards__item_img} src={image} alt="pict" />
      <p className={style.cards__item_tempDay}>30</p>
      <p className={style.cards__item_tempNight}>16</p>
    </div>
  )
};

interface CardsProps {
  weatherCodes: any[], // from daily weathercodes
  days: any[], // from daily time
  hourlyTemperature: any[], //from hourly temperature_2m
};


const WeatherWidgetCards = () => {

  return (
    <div className={style.week__cards} >
      <p className={style.week__cards_text}>7-Day Forecast</p>
      <div className={style.week__cards_items}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default WeatherWidgetCards