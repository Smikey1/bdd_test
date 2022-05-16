import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
function Body() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </div>
  );
}

export default Body;
