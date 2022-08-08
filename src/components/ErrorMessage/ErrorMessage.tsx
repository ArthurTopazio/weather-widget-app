import React from "react";

interface ErrorMessageTPD {
  error: string | null,
};

const ErrorMessage: React.FC<ErrorMessageTPD> = ({ error }) => {

  return (
    <>
      {error}
    </>
  )
};

export default ErrorMessage;