import React from "react";
import {
  Cart,
  Dashboard,
  Home,
  Login,
  Post,
  Edit,
  DetailProduct,
  Checkout,
  Register
} from "../pages";
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
      <Route path={Routes.PRODUCT} component={DetailProduct} />
      <Route path={Routes.REGISTER} component={Register} />
      <Route path={Routes.CHECKOUT} component={Checkout} />
    </>
  );
};

export default AppRoute;
