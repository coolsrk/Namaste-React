import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/hooks/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";


export const RestaurantMenu = () => {

  const {resId} = useParams();
  const {resInfo, items} = useRestaurantMenu(resId);
  
  if (!resInfo) {
    return <Shimmer />;
  }
  return (
    <div className="">
      <div className="m-2 p-2 font-bold text-lg text-center">
        <h1>{resInfo.name}</h1>
      </div>

      {items.map((category) => 
        <RestaurantCategory category={category}></RestaurantCategory>
      )}
    </div>
  );
};
