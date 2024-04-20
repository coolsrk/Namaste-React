import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({category, showItems, setShowIndex}) => {
    
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
      setShowIndex();
    };

    return (
        <div className="category mx-40 p-2">
            <div className="category-heading flex justify-between cursor-pointer" onClick={handleClick}>
              <h1 className="mb-4 font-bold text-lg">
                {category.card.card.title}({category.card.card.itemCards.length})
              </h1>
              <button>⬆</button>
            </div>           

            <div className="items">
              {category.card.card.itemCards.map((item) =>
                  showItems && <ItemList item={item}></ItemList>
              )}
            </div>
          </div>
    );
}
