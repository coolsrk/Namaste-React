import { useEffect, useState } from "react";
import { Restaurant } from "./Restaurant";
// import * as RESTAURANTS from "../restaurent-details.json";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { useOnlineStatus } from "../utils/hooks/useOnlineStatus";

// let cardsData = [];

export const Body = () => {
  const [resList, setRestroList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const [text, setText] = useState("");
  // console.log(text);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredList(
      json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestroList(
      json?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) return <h1>Please check your internet connection.</h1>

  // Conditional rendering
  if (resList?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>

        <button
          onClick={() => {
            const searchList = resList.filter((e) =>
              e.info.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredList(searchList);
          }}
        >
          Search
        </button>

        <button
          onClick={() => {
            const res = resList?.filter((v) => v.info.avgRating > 4.2);
            setFilteredList(res);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredList?.map((value) => (
          <Link to={"./restaurant/"+value?.info.id} key={value.info.id}><Restaurant resData={value.info} /></Link>
        ))}
      </div>
    </div>
  );
};
