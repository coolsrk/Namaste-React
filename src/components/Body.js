import { useState } from "react";
import { Restaurant } from "./Restaurant";
import * as RESTAURANTS from "../restaurent-details.json";

export const Body = () => {
  const [resList, giveTopRated] = useState(RESTAURANTS.restaurants);
  return (
    <div className="body">
      <button className="search" onClick={() => {
        const res = resList.filter((v) => v.info.avgRating > 4.2)
        console.log(res);
        giveTopRated(res);
      }}>
        Search
      </button>
      <div className="res-container">
        {resList.map((value) => (
          <Restaurant resData={value.info} key={value.info.id} />
        ))}
      </div>
    </div>
  );
};
