import React, { useEffect, useState } from 'react';

import { useActions } from '../../hooks/useAction';
import useDebounce from '../../hooks/useDebounce';
import { usedTypedSelector } from '../../hooks/usedTypedSelector';

import LocationFormElement from '../LocationFormElement/LocationFormElement';
import Loader from '../UI/Loader/Loader';

import style from './LocationForm.module.scss';

const LocationForm: React.FC = () => {

  const { searchResult, loading, error } = usedTypedSelector(state => state.location);
  const { FetchLocationAction } = useActions();
  const debounceFetchLocation = useDebounce(FetchLocationAction, 500);

  const [value, setValue] = useState('');

  useEffect(() => { debounceFetchLocation(value) }, [value]);

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  };

  let locationElements = searchResult
    ? searchResult.map(item => <LocationFormElement location_data={item} key={item.id} />)
    : <h2>Search result</h2>;

  return (
    <div className={style.form__box}>
      <h1>Choose location</h1>
      <input
        type='text'
        className={style.form__input}
        placeholder='Enter Your location'
        value={value}
        onChange={changeHandler}
      />
      {loading ? <Loader variant='a' /> : locationElements}
    </div>
  );
};

export default LocationForm;