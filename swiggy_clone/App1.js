import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header  from './src/components/Header';
import Shimmer from './src/components/Shimmer';
// import Shimmer from './components/JS/Shimmer';


/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */



//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });
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
      className="res-card"
      style={{
        backgroundColor: '#f0f0f0',
      }}
    >
      <img
        className="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/' +
          cloudinaryImageId
        }
        alt="Biryani"
      />
      {/* <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4> */}
      {/* <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(', ')}</h4>
      <h4>{resData.data.avgRating} stars</h4>
      <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.data.deliveryTime} minutes</h4> */}
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};


// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

const Body = () => {
  const [listOfRestaurents,setlistOfRestaurents]=useState([])
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async() =>{
    const data=await fetch(
// fetch will fetch data from api this is given to us by browser
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
// wait for data to be fetched or to come
    );
    const json = await data.json();
    //  wait for data to be fetched and converting the  data to json 
    console.log(json);
    setlistOfRestaurents(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // and passing the data
  };
  // conditional rendering 
   if(listOfRestaurents.length==0){
    return <Shimmer/>
   }
  
  
  return (
    <div className="body">
      <div className="filter">
        
        <button className='filter-btn' 
        onClick={
          ()=>{
            const filtereList=listOfRestaurents.filter(
              (res)=>res.data.avgRating >4
            );
            setlistOfRestaurents(filtereList);
          }
        }
        
        >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[12]} /> */}

        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {listOfRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* // * or */}

        {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}

        {resList.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}

        {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
         */}
      </div>
    </div>
  );
};

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Vasu</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);