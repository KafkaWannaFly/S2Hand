import React from "react";
import { CategoryPanel, Text14 } from "../shared/components";

export const Home = () => {
  return (
    <div>
      <Text14 text={"Navbar"} />

      <CategoryPanel />

      <Text14 text={"Item post"} />
    </div>
  );
};
