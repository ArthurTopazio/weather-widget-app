import React, { useEffect, useState } from "react";

import { useActions } from "../../hooks/useAction";
import { usedTypedSelector } from "../../hooks/usedTypedSelector";

import style from './LocationForm.module.scss';

const LocationForm: React.FC = () => {

  const { search_result, search_reguest, loading, error } = usedTypedSelector(state => state.location);

  console.log(search_result, search_reguest, loading, error)

  const { setLocationRequest, FetchLocationAction } = useActions()

  const [value, setValue] = useState('');

  useEffect(() => { FetchLocationAction(value) }, [value])

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  };

  let elements = search_result ? search_result.map(item => <p key={item.id}>{item.name}</p>)
    : <p>empty</p>

  return (
    <div className={style.form__box}>
      <h1>choose location</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className={style.form__input}
          placeholder="Enter Your location"
          value={value}
          onChange={changeHandler}
        />
        <button type="submit"
          className={style.form__submit}>
          choose
        </button>
      </form>
      {elements}
    </div>
  )
}

export default LocationForm;