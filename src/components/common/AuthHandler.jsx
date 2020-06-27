import React, { useEffect, useContext } from "react";
import { DispatchContext } from "../state/contexts";
import { Redirect } from "react-router-dom";

function AuthHandler({ location: { hash } }) {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ type: "finalizeLogin", payload: hash });
  });

  return <Redirect to="/" />;
}

export default AuthHandler;
