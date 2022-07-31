import React, { useEffect } from "react";
import moment from 'moment';

import { useActions } from "../../hooks/useAction";
import { usedTypedSelector } from "../../hooks/usedTypedSelector";

import LocationForm from "../LocationForm/LocationForm";
import Modal from "../Modal/Modal";

import style from './Widget.module.scss';

const Widget: React.FC = () => {

  const { error, location_data, loading, weather_data } = usedTypedSelector(state => state.weather);

  const { name, latitude, longitude, timezone } = location_data;

  const { FetchWeatherAction } = useActions();

  let start = moment().format().slice(0, 10);
  let end = moment().add(6, 'days').format().slice(0, 10);

  useEffect(() => {
    if (name) { FetchWeatherAction({ latitude, longitude, timezone, start, end }) }
  }, [name])

  // let copy = JSON.parse(JSON.stringify(weather_data))

  // console.log(copy.hourly)

  return (
    <>
      {!name ? <Modal><LocationForm /></Modal> : <div className={style.body}>
        <div className={style.wrapper}>
          <div>
            {name ? <p>located</p> : <p>unlocated</p>}
            {`name: ${name}, latitude: ${latitude}, longitude: ${longitude}, timezone: ${timezone}`}
            {<><p>start date: {start} </p>
              <p>end date: {end} </p></>}
          </div>
          <div>daily time <p>{/*copy.daily.time*/}</p>
            daily weathercode <p>{/*copy.daily.weathercode*/}</p>
            daily temperature by hour today <p>{/*copy.hourly.time.splice(0, 23)*/}</p>
            daily temperature by hour today <p>{/*copy.hourly.temperature_2m.splice(0, 23)*/}</p>
          </div>
        </div>
      </div>}

    </>
  )
}

export default Widget;