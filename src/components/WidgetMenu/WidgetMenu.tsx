import { FC } from 'react';

import s from './WidgetMenu.module.scss';

const WidgetMenu: FC = () => {
  return (
    <nav className={s.menu}>
      ...
      <ul className={s.topmenu}>
        <li><a href="" className={s.down}>...</a>
          <ul className={s.submenu}>
            <li><a href="">Category</a></li>
            <li><a href="">Author</a></li>
            <li><a href="">Archive</a></li>
            <li><a href="">Tags</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
};

export default WidgetMenu;
