import React, { useEffect, useState } from 'react';

import { useActions } from '../../hooks/useAction';
import { usedTypedSelector } from '../../hooks/usedTypedSelector';

import LocationFormElement from '../LocationFormElement/LocationFormElement';

import style from './LocationForm.module.scss';

const LocationForm: React.FC = () => {

  const { searchResult } = usedTypedSelector(state => state.location);
  const { FetchLocationAction } = useActions();

  const [value, setValue] = useState('');

  useEffect(() => { FetchLocationAction(value) }, [value]);

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  };

  let locationElements = searchResult
    ? searchResult.map(item => <LocationFormElement location_data={item} key={item.id} />)
    : <h2>Search result</h2>;

  return (
    <div className={style.form__box}>
      <h1>choose location</h1>
      <input
        type='text'
        className={style.form__input}
        placeholder='Enter Your location'
        value={value}
        onChange={changeHandler}
      />
      {locationElements}
    </div>
  );
};

export default LocationForm;