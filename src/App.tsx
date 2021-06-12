import React from "react";
import "./App.css";
import { Text14 } from "./shared/texts";

function App(): JSX.Element {
  return (
    <div className="App">
      <Text14
        text={
          "Sample text have fontSize = 14 and fontFamily = Montserrat Regular"
        }
      />

      <Text14 italic underline text={"Italic looks like this"} />

      <Text14 semiBold text={"This is how a semi-bold text look like"} />

      <Text14
        black
        text={"You can also change apply your own style"}
        style={{ color: "red", fontSize: 24 }}
      />

      <Text14
        black
        text={"Define your callback"}
        style={{ color: "violet", fontSize: 24 }}
        onClick={(e) =>
          (e.currentTarget.innerHTML = (Math.random() * 100).toFixed(0))
        }
      />
    </div>
  );
}

export default App;
