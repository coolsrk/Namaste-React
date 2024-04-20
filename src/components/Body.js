import { useContext, useEffect, useState } from "react";
import { Restaurant, WithPromotedLabel } from "./Restaurant";
// import * as RESTAURANTS from "../restaurent-details.json";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { useOnlineStatus } from "../utils/hooks/useOnlineStatus";
import axios from 'axios';
import { UserContext } from "../utils/contexts/UserContext";

// let cardsData = [];

export const Body = () => {
  const [resList, setRestroList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const PromotedRestaurant = WithPromotedLabel(Restaurant);
  
  const {loggedInUser, setUserName} = useContext(UserContext);

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

        <input
          type="text"
          className="border border-black m-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>

        <button className="p-2"
          onClick={() => {
            const searchList = resList.filter((e) =>
              e.info.name.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredList(searchList);
          }}
        >
          Search
        </button>

        <button className="p-2"
          onClick={() => {
            const res = resList?.filter((v) => v.info.avgRating > 4.2);
            setFilteredList(res);
          }}
        >
          Top Rated Restaurants
        </button>

        <input
            type="text"
            className="border border-black !outline-none"
            // Setting up the text box value to current user name
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>

      <div className="res-container">
        {filteredList?.map((value, index) => (
          <Link to={"./restaurant/"+value?.info.id} key={value.info.id}>
            {
              index%2 === 0 ? (<PromotedRestaurant resData={value.info}/>): 
              (<Restaurant resData={value.info} />)
            }
          </Link>
        ))}
      </div>
    </div>
  );
};
