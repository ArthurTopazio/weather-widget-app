import React from "react";

interface ErrorMessageTPD {
  error: string | null,
};

const ErrorMessage: React.FC<ErrorMessageTPD> = (props: ErrorMessageTPD) => {

  const { error } = props;

  return (
    <div>
      {error}
    </div>
  )
};

export default ErrorMessage;