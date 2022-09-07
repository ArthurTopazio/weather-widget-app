import moment from 'moment-timezone';

import style from './Header.module.scss';
import locationVector from '../../../assets/vectors/other/location-vector.png';

interface HeaderTPD {
  name: any,
  timezone: any,
};

const Header: React.FC<HeaderTPD> = ({ name, timezone }) => {

  return (
    <div className={style.header} >
      <p className={style.location__name}>
        <img src={locationVector}
          alt='located'
          width={17}
        />
        {name}
      </p>
      <p className={style.location__date} >
        {moment().tz(timezone).format('LLLL')}
      </p>
    </div>
  );
};

export default Header;