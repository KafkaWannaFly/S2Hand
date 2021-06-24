import React from "react";
import { Cart, Dashboard, Home, Login, Post } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/cart" component={Cart} />
        <Route path="/post" component={Post} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
