import React, { useEffect, useContext } from "react";
import { DispatchContext } from "../../state/contexts";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function LogoutHandler() {
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ type: "logout" });
  });

  return <Redirect to="/" />;
}

export default LogoutHandler;
