import React from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./components/Header";
import { Body } from "./components/Body";


const AppLayout = () => (
  <div className="app">
    <HeaderComponent />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
