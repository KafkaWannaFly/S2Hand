import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Navbar, Footer } from "./containers";
import styles from "./App.module.scss";
import { AppRoute } from "./routings";
import { useAppDispatch } from "./hooks";
import { fetchDataCategories, fetchDataProducts } from "./redux/thunks";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchDataCategories());
      await dispatch(fetchDataProducts());
    })();
  }, [dispatch]);

  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.app__container}>
          <Navbar className={styles.app__navbar} />
          <div className={styles.app__body}>
            <Switch>
              <AppRoute />
            </Switch>
          </div>
          <Footer className={styles.app__footer} />
        </div>
      </div>
    </Router>
  );
};

export default App;
