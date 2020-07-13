import React, { useEffect, useContext } from "react";
import { DispatchContext } from "../../state/contexts";
import { Redirect } from "react-router-dom";

function LogoutHandler({ location }) {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ type: "logout" });
  });

  return <Redirect to={`${location.state.url}`} />;
}

export default LogoutHandler;
