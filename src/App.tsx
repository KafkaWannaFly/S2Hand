import React from "react";
import { Cart, Dashboard, Home, Login, Post } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Styles from "./App.module.scss";

const App = () => {
  return (
    <Router>
      <div className={Styles.app}>
        <div className={Styles.app__container}>
          <Navbar className={Styles.app__navbar} />
          <div className={Styles.app__body}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/cart" component={Cart} />
              <Route path="/post" component={Post} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
