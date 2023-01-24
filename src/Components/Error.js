import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const { status, statusText, data } = useRouteError();

  return (
    <div>
      <h2>OOPS..!</h2>
      <h3>Something went wrong... {":("}</h3>
      <h3>
        {status} : {statusText}
      </h3>
      <h3>{data}</h3>
    </div>
  );
};

export default Error;
