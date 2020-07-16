import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
  path,
  component: Component,
  render,
  isLoggedIn,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) return <Redirect to="/" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
}

export default ProtectedRoute;
