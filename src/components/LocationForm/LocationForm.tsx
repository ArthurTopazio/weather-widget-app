import React, { useState } from "react";

import style from './LocationForm.module.scss';

const LocationForm: React.FC = () => {

  const [value, setValue] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  };

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
      {<><p>variants</p>
        <p>{value}</p></>}
    </div>
  )
}

export default LocationForm;