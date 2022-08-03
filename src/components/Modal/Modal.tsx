import React from "react";

import style from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode
};

const Modal: React.FC<ModalProps> = ({ children }: ModalProps) => {

  return (
    <>
      <div className={style.wrapper} />
      {children}
    </>
  )
};

export default Modal;