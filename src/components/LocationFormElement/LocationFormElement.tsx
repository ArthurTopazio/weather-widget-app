import { useActions } from '../../hooks/useAction';

import style from './LocationFormElement.module.scss';

interface locationDataForm {
  id: number
  name: string
  latitude: number
  longitude: number
  timezone: string
  country: string
};

interface ElementTPD {
  location_data: locationDataForm
  key: number
};

const LocationFormElement: React.FC<ElementTPD> = (props) => {

  const { setLocationData } = useActions();

  const { name, latitude, longitude, timezone, country } = props.location_data;

  const handleClick = () => { setLocationData({ name, latitude, longitude, timezone, isLocated: true }) };

  return (
    <div
      className={style.wrapper}
      onClick={handleClick}
    >
      <p>{`City:  ${name}, Country:  ${country}, Timezone:  ${timezone}`}</p>
    </div>
  );
};

export default LocationFormElement;