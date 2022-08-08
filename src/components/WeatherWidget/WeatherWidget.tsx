import React from "react";

import { useWeatherWidget } from "../../hooks/useWeatherWidget";

import LocationForm from "../LocationForm/LocationForm";
import Modal from "../Modal/Modal";
import WidgetBody from "../WidgetBody/WidgetBody";

const WeatherWidget: React.FC = () => {

  const { name } = useWeatherWidget();

  return (
    <>
      {!name ? <Modal><LocationForm /></Modal> : <WidgetBody />}
    </>
  )
};

export default WeatherWidget;