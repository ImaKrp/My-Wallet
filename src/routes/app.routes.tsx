import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "../Pages/App/Dashboard";
import { List } from "../Pages/App/List";
import { Layout } from "../Layout";

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Redirect from="*" to="/dashboard" />{" "}
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/list/:type" component={List} />
      </Switch>
    </Layout>
  );
};
