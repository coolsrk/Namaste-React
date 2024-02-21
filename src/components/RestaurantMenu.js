import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/hooks/useRestaurantMenu";


export const RestaurantMenu = () => {

  const {resId} = useParams();
  const {resInfo, items} = useRestaurantMenu(resId);
  
  if (!resInfo) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <h1>{resInfo.cards[0].card.card.text}</h1>
      <h3>List of items</h3>
      <ul>
        {items?.map((item) => (
          <>
            <li>{item.card.info.name}</li><p>Rs {item.card.info.price / 100}</p>
          </>
        ))}
      </ul>
    </div>
  );
};
