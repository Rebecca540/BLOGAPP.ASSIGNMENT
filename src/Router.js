import React from "react";
import Pages from "./Pages";
import Post from "./Pages/Post";
import { Route, Switch, Redirect } from "react-router-dom";

const Router = () => {
  return (
    <React.Suspense fallback={<h6>Loading...</h6>}>
      <Switch>
        <Route path="/post" component={Post} />
        <Route path="/login" component={Pages.Login} />
        <Route path="/signup" component={Pages.SignUp} />
        <Redirect from="*" to="/post" />
      </Switch>
    </React.Suspense>
  );
};
export default Router;
