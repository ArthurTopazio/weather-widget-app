import React from "react";

import LocationForm from "../LocationForm/LocationForm";
import Modal from "../Modal/Modal";

const Widget: React.FC = () => {
  return (
    <div>
      <Modal>
        <LocationForm />
      </Modal>
    </div>
  )
}

export default Widget;