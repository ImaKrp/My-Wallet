import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignIn } from "../Pages/Sign/SignIn";

export const PublicRoutes: React.FC = () => {
  return (
    <>
      <Redirect from="*" to="/signin" />
      <Switch>
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </>
  );
};
