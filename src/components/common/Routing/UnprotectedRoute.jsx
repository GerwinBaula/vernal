import React from "react";
import { Route } from "react-router-dom";

function UnprotectedRoute({ path, component: Component, render, ...rest }) {
  return (
    <Route {...rest} render={(props) => <Component {...props} {...rest} />} />
  );
}

export default UnprotectedRoute;
