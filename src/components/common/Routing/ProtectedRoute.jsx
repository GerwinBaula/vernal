import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { StateContext } from "../../state/contexts";
import { getLoggedInStatus } from "../../state/selectors";

function ProtectedRoute({ path, component: Component, render, ...rest }) {
  const state = useContext(StateContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!getLoggedInStatus(state)) return <Redirect to="/" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
}

export default ProtectedRoute;
