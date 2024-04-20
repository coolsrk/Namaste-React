import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/hooks/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";


export const RestaurantMenu = () => {

  const {resId} = useParams();
  const {resInfo, items} = useRestaurantMenu(resId);

  // Setting the showing category index from parent so we can control 
  // which component to open from parent
  // only index with showIndex value would be expanded and others will get collapsed.

  const [showIndex, setShowIndex] = useState(null);
  
  if (!resInfo) {
    return <Shimmer />;
  }
  return (
    <div className="">
      <div className="m-2 p-2 font-bold text-lg text-center">
        <h1>{resInfo.name}</h1>
      </div>

      {items.map((category, index) =>
        // This is thing is known as Controlled component. 
        // Means the state is controlled by Parent component, not child one. 
        <RestaurantCategory category={category} showItems={showIndex === index && true} setShowIndex={() => setShowIndex(index)}></RestaurantCategory>
      )}
    </div>
  );
};
