import { FC, useState } from 'react';
import { useActions } from '../../hooks/useAction';

import s from './WidgetMenu.module.scss';

const WidgetMenu: FC = () => {

  const { ChangeLocation } = useActions();
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = isActive ? `${s.button} ${s.buttonActive}` : s.button;
  const subMenuStyle = isActive ? `${s.subMenu} ${s.subMenuActive}` : s.subMenu;

  const changeLocation = () => {
    setIsActive(false);
    ChangeLocation();
  };

  return (
    <nav className={s.menu}>
      <div
        className={buttonStyle}
        onClick={() => setIsActive(!isActive)}
      >
        <div>...</div>
      </div>
      <div className={subMenuStyle}>
        <img src="" alt="img" />
        <div
          className={s.link}
          onClick={changeLocation}
        >
          <img src="" alt="img" />
          Change location
        </div>
      </div>
    </nav>
  )
};

export default WidgetMenu;
