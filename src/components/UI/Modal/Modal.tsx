import React from 'react';

import style from './Modal.module.scss';

interface ModalTPD {
  children: React.ReactNode
};

const Modal: React.FC<ModalTPD> = ({ children }) => {

  return (
    <>
      <div className={style.wrapper} />
      {children}
    </>
  )
};

export default Modal;