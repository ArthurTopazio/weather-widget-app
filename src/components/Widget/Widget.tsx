import React, { useState } from "react";

import LocationForm from "../LocationForm/LocationForm";
import Modal from "../Modal/Modal";

const Widget: React.FC = () => {

  const [isLocated, setIsLocated] = useState(false)

  return (
    <>
      {!isLocated ? <Modal><LocationForm /></Modal> : null}
      <div>
        widget
      </div>
    </>
  )
}

export default Widget;