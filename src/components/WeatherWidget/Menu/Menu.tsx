import { FC, useState } from 'react';
import { useActions } from '../../../hooks/useAction';

import s from './Menu.module.scss';
import exitImg from './../../../assets/vectors/other/exit.png';

const Menu: FC = () => {

  const { changeLocation } = useActions();
  const [isActive, setIsActive] = useState(false);

  const buttonStyle = isActive ? `${s.button} ${s.buttonActive}` : s.button;
  const subMenuStyle = isActive ? `${s.subMenu} ${s.subMenuActive}` : s.subMenu;

  const setLocation = () => {
    setIsActive(false);
    changeLocation();
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
        Menu
        <div
          className={s.link}
          onClick={setLocation}
        >
          <img src={exitImg} width={25} alt="img" />
          Change location
        </div>
      </div>
    </nav>
  )
};

export default Menu;
