import React from 'react';

import s from './Loader.module.scss';

type LoaderVariant = 'a' | 'b';

interface LoaderTPD {
  variant: LoaderVariant
};

const Loader: React.FC<LoaderTPD> = ({ variant }) => {

  return (
    <div
      className={s.ldsRipple}
      style={variant === 'b' ? { left: 0 } : {}}>
      <div></div>
      <div></div>
    </div>
  )
};

export default Loader;