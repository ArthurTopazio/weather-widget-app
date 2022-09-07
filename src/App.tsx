import { useEffect } from 'react';

import WeatherWidget from './components/WeatherWidget/WeatherWidget';
import { useActions } from './hooks/useAction';
import { LocationData } from './types/weather-types';

const App: React.FC = () => {

  console.warn('memo/cash data, weather codes');

  const { setLocationData } = useActions();

  useEffect(() => {
    if (localStorage.getItem('isLocated')) {
      setLocationData({
        isLocated: true,
        name: localStorage.getItem('name'),
        latitude: Number(localStorage.getItem('latitude')),
        longitude: Number(localStorage.getItem('longitude')),
        timezone: localStorage.getItem('timezone')
      } as LocationData);
    }
  }, []);

  return (
    <>
      <WeatherWidget />
    </>
  );
};

export default App;
