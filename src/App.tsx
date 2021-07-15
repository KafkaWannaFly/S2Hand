import React from "react";
import { Cart, Dashboard, Home, Login, Post } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./containers";
import styles from "./App.module.scss";
import { roots } from "./routings";

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.app__container}>
          <Navbar className={styles.app__navbar} />
          <div className={styles.app__body}>
            <Switch>
              <Route exact path={roots.home} component={Home} />
              <Route path={roots.dashboard} component={Dashboard} />
              <Route path={roots.cart} component={Cart} />
              <Route path={roots.post} component={Post} />
              <Route path={roots.login} component={Login} />
            </Switch>
          </div>
          <Footer className={styles.app__footer} />
        </div>
      </div>
    </Router>
  );
};

export default App;
