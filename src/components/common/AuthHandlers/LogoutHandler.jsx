import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

function LogoutHandler({ onLogout, onUserRemove, location }) {
  useEffect(() => {
    onLogout();
    onUserRemove();
  });

  return <Redirect to={`${location.state.url}`} />;
}

export default LogoutHandler;
