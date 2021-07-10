import React from "react";
import { Cart, Dashboard, Home, Login, Post } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./containers";
import Styles from "./App.module.scss";
import { roots } from "./routings";

const App = () => {
  return (
    <Router>
      <div className={Styles.app}>
        <div className={Styles.app__container}>
          <Navbar className={Styles.app__navbar} />
          <div className={Styles.app__body}>
            <Switch>
              <Route exact path={roots.home} component={Home} />
              <Route path={roots.dashboard} component={Dashboard} />
              <Route path={roots.cart} component={Cart} />
              <Route path={roots.post} component={Post} />
              <Route path={roots.login} component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
