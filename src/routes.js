import React, { Component } from "react";
import Layout from "./HOC/Layout";
import { Switch, Route } from "react-router-dom";
import LogIn from "./Components/login";
import Home from "./Components/home";
import Dashboard from "./Components/admin/Dashboard";

const Routes = props => {
  console.log("route props", props);
  return (
    <Layout>
      <Switch>
        <Route exact component={Dashboard} path="/dashboard" />
        <Route exact component={LogIn} path="/login" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
