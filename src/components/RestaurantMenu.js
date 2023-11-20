import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";


export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [items, setItems] = useState([]);

  const {resId} = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json?.data);
    console.log(json?.data);
    setItems(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  if (!resInfo) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <h1>{resInfo.cards[0].card.card.info.name}</h1>
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
