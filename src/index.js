import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routers";
import { START_URL } from "./constants";

ReactDOM.render(
    <BrowserRouter basename={START_URL}>
      <MainRouter />
    </BrowserRouter>,
  document.getElementById("root")
);
