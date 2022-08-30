import React from 'react';

import { useWeatherWidget } from '../../hooks/useWeatherWidget';

import LocationForm from '../LocationForm/LocationForm';
import Modal from '../UI/Modal/Modal';
import WidgetBody from '../WidgetBody/WidgetBody';

const WeatherWidget: React.FC = () => {

  const { isLocated } = useWeatherWidget();

  return (
    <>
      {isLocated ? <WidgetBody /> : <Modal><LocationForm /></Modal>}
    </>
  )
};

export default WeatherWidget;