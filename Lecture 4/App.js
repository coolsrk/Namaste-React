import React from "react";
import ReactDOM from "react-dom/client";
import * as RESTAURANTS from "./restaurent-details.json";

const NavComponent = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={require("./logo.png")} />
    </div>

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Orders</li>
      </ul>
    </div>
  </div>
);

const Restaurant = (props) => {
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
  } = props.resData;

  return (
    <div className="res-card">
      <img
        className="res-image"
        alt="not-rendered"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4>{name}</h4>
      <h4>{locality + " " + areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating + " Ratings"}</h4>
      <h4>{cuisines.join(",")}</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {RESTAURANTS.restaurants.map((value) => (
        <Restaurant resData={value.info} key={value.info.id} />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <NavComponent />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
