import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{

    const{resId}=useParams();

    const [showIndex,setShowIndex]=useState(null);
   
    //  const [resInfo,setresInfo]=useState(null);

    //   useEffect(()=>{fetchData()},[]);

    // const fetchData=async()=>{
    //     const data = await fetch(MENU_API + resId);
             
    //          const json= await data.json();
        
    //          setresInfo(json.data)
        
    // };
    const resInfo=useRestaurantMenu(resId);/*custom hook*/
   
if(resInfo === null) return <Shimmer/>

const{name,cuisines,costForTwo}=resInfo?.cards[2]?.card?.card?.info;

const {itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

// console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
);

// console.log(categories);

    return(
        <div className="text-center">
            <h1 className="font-bold  my-6 text-2xl">{name}</h1>
            <p className="font-bold  my-6 text-l">{cuisines} - ₹ {costForTwo} for Two</p>
            {/* category acordian */}
            
            {categories.map((category,index) =><RestaurantCategory 
            key= {category?.card?.card?.categoryId} 
            data={category?.card?.card}
            showItems={index===showIndex ? true:false}
            setShowIndex={()=>setShowIndex(index)}
            />)}
            
            
            {/*
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item =><li key= {item.card.info.id}>{item.card.info.name}-{item.card.info.price/100  } rs</li>)}
            </ul> */}
        </div>
    )
}
export default RestaurantMenu;