import React from "react";
import "./App.css";
import { Home } from "./screens";
import { R } from "./shared/res";

function App(): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: R.colors.background,
        flex: 1
      }}
    >
      <Home />
    </div>
  );
}

export default App;
