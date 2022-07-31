import React, { useEffect, useState } from "react";
import moment from 'moment';

import { useActions } from "../../hooks/useAction";
import { usedTypedSelector } from "../../hooks/usedTypedSelector";

import LocationForm from "../LocationForm/LocationForm";
import Modal from "../Modal/Modal";

const Widget: React.FC = () => {

  const { error, location_data, loading, weather_data } = usedTypedSelector(state => state.weather)

  useEffect(() => {
  }, [location_data.name])

  console.log('weatherData', weather_data)

  let today = (new Date).toISOString().slice(0, 10);
  console.log(today);
  console.log(moment().format().slice(0, 10))
  console.log(moment().add(7, 'days').format().slice(0, 10))


  return (
    <>
      {!location_data.name ? <Modal><LocationForm /></Modal> : null}
      <div>
        {location_data.name ? <p>located</p> : <p>unlocated</p>}
        {`name: ${location_data.name}, latitude: ${location_data.latitude}, longitude: ${location_data.longitude}, timezone: ${location_data.timezone}`}
        {<p>today: {today} </p>}
      </div>
    </>
  )
}

export default Widget;