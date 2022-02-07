import React from "react";
import { Main, Body, Recipes } from "../components";

const HomePage = () => {
  return (
    <div className="hero-body">
      <link
        href="https://fonts.googleapis.com/css2?family=Amiri:ital@1&family=Cormorant+Garamond:wght@300&family=Racing+Sans+One&family=Rajdhani:wght@500&family=Roboto+Mono:wght@100&display=swap"
        rel="stylesheet"
      ></link>
      <Main />
      <Body />
      <Recipes />
    </div>
  );
};

export default HomePage;
