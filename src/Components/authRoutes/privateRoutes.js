import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ user, component: Comp, ...rest }) => {
  return (
    <div>
      <Route {...rest} component={props => (user ? <Comp {...props} user={user} /> : <Redirect to="/login" />)} />
    </div>
  );
};

export default PrivateRoute;
