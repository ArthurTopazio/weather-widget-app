import style from './LocationFormElement.module.scss';

interface locationDataForm {
  id: number
  name: string
  latitude: number
  longitude: number
  timezone: string
  country: string
};

interface LFElement {
  location_data: locationDataForm
  key: number
};

const LocationFormElement: React.FC<LFElement> = (props: LFElement) => {

  const { id, name, latitude, longitude, timezone, country } = props.location_data;

  const handleClick = () => { alert(`${timezone}`) };

  return (
    <div
      className={style.wrapper}
      onClick={handleClick}
    >
      <p>{`city:  ${name}, country:  ${country}, timezone:  ${timezone}`}</p>
    </div>

  )
};

export default LocationFormElement;