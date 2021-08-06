import React from "react";
import { Cart, Dashboard, Home, Login, Post, Edit } from "../pages";
import { Route } from "react-router-dom";
import Routes from "./routes";

const AppRoute = () => {
  return (
    <>
      <Route exact path={Routes.HOME} component={Home} />
      <Route path={Routes.DASHBOARD} component={Dashboard} />
      <Route path={Routes.CART} component={Cart} />
      <Route path={Routes.EDIT} component={Edit} />
      <Route path={Routes.POST} component={Post} />
      <Route path={Routes.LOGIN} component={Login} />
    </>
  );
};

export default AppRoute;
