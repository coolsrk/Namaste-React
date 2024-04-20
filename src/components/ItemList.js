export const ItemList = ({item}) => {
    return (
        <div className="m-2 p-2 flex justify-between">
          <div className="item-info">
            <span className="font-semibold">
              {item.card.info.name}
            </span>
            <br/>
            <span>₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
            <br/>
            <span className="text-xs">
              {item.card.info.description}
            </span>
          </div>

          <img className="w-20" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}></img>
        </div> 
      )
}
