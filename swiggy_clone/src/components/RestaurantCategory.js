 import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowIndex})=>{

  // const[showItems,setShowItems]=useState(false);
  const handleClick=()=>{
    //  setShowItems(!showItems);
    setShowIndex();
  };
    
    return( <div >
 
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  ">
        <div className="flex justify-between cursor-pointer " onClick={handleClick}>
         <span className="font-bold text-lg">
          
          {data.title} ({
            data.categories.length > 1
        ? data.categories[0].itemCards?.length
        : data.categories?.itemCards?.length
          })
          
          </span>

        <span className="text-end">🔽</span>
      
        </div>
        {/* if show item true then only items list */}
          {showItems && <ItemList items={data.categories.length > 1
        ? data.categories[0].itemCards
        : data.categories.itemCards}/>}
  
        </div>
      
       
    </div>
    );
};

export default RestaurantCategory;