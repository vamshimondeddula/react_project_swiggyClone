import { useEffect, useState } from 'react';
import RestaurantCard,{withPromotedLabel} from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');
  
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard)

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    console.log(json);
    // * optional chaining
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

 const OnlineStatus=useOnlineStatus();

  // * Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
if(OnlineStatus===false){
  return <h1>oops.. you lost your internet connections</h1>;
};



  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter">
        <div className="content-center-safe">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="m-6 border-1 rounded-2xl"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className='border-1 border-b-gray-500 m-4 px-2 rounded-2xl bg-blue-300'
            onClick={() => {
              // * Filter th restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className='border-1 border-b-gray-500 m-4 px-2 rounded-2xl bg-amber-300'
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRestaurant.map((restaurant) => (
          <Link 
          key={restaurant.info.id}
          to={"/restaurants/"+restaurant.info.id}
          >
           {restaurant.info.promoted ?(<RestaurantCardPromoted  resData={restaurant}/>):(<RestaurantCard  resData={restaurant}/>)} 
          {/* <RestaurantCard  resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;