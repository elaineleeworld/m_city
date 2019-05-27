import React, { Component } from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";
import LogIn from "./Components/login";
import Home from "./Components/home";
import Dashboard from "./Components/admin/Dashboard";

import PrivateRoute from "./Components/authRoutes/privateRoutes";
import PublicRoute from "./Components/authRoutes/publicRoutes";

import AdminMatches from "./Components/admin/matches";

const Routes = props => {
  console.log("route props", props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches} />
        <PrivateRoute {...props} path="/dashboard" exact component={Dashboard} />
        {/* <Route exact component={Dashboard} path="/dashboard" /> */}
        {/*<Route exact component={LogIn} path="/login" />*/}
        <PublicRoute {...props} restricted={true} path="/login" exact component={LogIn} />
        <PublicRoute {...props} restricted={false} path="/" exact component={Home} />
        {/*<Route exact component={Home} path="/" />*/}
      </Switch>
    </Layout>
  );
};

export default Routes;
