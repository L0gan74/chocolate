import { NextPage } from "next";
import React from "react";
import Start from "./components/main/start";
import Benefits from "./components/main/benefits";
import Products from "./components/main/products";
import Made from "./components/main/made";
import Our from "./components/main/our";
import Sellers from "./components/main/sellers";

const Home: NextPage = () => {
  return (
    <>
      <Start />
      <Benefits />
      <Products />
      <Made />
      <Our />
      <Sellers />
    </>
  );
};

export default Home;
