import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div
      className="m-4 p-8 items-center rounded-2xl bg-gray-100 w-80 h-100 hover:bg-gray-50"
     
    >
      <img
        className="m-2 rounded-2xl h-60 w-2xl hover:h-50 hover:w-50"
        // src={
        //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
        //   resData.data.cloudinaryImageId
        // }

        src={
          CDN_URL+cloudinaryImageId
        }
        alt="Biryani"
      />
      {/* <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4> 
       <h3>{resData.data.name}</h3>
       */}
      <h3 className="text-amber-950 text-2xl">{name}</h3>
      <h4 className="text">{cuisines.join(', ')}</h4>
      <h4 className="flex"><div className="size-fit bg-green-400"> <span>&#11088;</span> {avgRating} </div></h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};




export const withPromotedLabel=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label>Promoted</label>
      <RestaurantCard {...props}/>
      </div>
      
    );
  }
}



export default RestaurantCard;