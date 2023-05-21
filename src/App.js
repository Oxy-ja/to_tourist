import React from "react";
// import classes from "./App.module.css";
import './App.css'

import Title from "./Components/Title/Title";
import Destination from "./Components/Destination";
import Content from "./Components/Content/Content";

const toTourist = () => {
  return (
    <div className="toTourist-wrap">
      <Title />
      <Destination />
      <Content />
    </div>
  );
};

export default toTourist;
