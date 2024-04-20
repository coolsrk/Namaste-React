import { CDN_URL } from "../utils/constants";
export const Restaurant = (props) => {
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
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{locality + " " + areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating + " Ratings"}</h4>
      <h4>{cuisines.join(",")}</h4>
    </div>
  );
};

// Higher order function 

export const WithPromotedLabel = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-sm">Promoted</label>
        <Restaurant {...props}/>
      </div>
    );
  };
}
