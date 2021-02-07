import { Redirect, Route, Switch } from "react-router-dom";

import { Login } from "modules/login/pages/Login/";
import { Products } from "modules/products/pages/Products";

import { AppRoute } from "./AppRoute.enum";

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={Products} />
      <Route path={AppRoute.login} component={Login} />

      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
