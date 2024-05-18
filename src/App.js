import React from "react";
import "./App.css";
import {
  Header,
  Footer,
  Blog,
  WhatGPT3,
  Features,
  Possibility,
} from "./container";

import { Cta, Navbar, Brand } from "./component";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
