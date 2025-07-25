import React from 'react';
import ReactDOM from 'react-dom/client';
import Header  from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
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


// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)



// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Vamshi</strong>
      </p>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
    </Provider>
  );
};
const appRouter=createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,

  children:[

    {
   path:"",
  element:<Body/>
},

    {
   path:"/about",
  element:<About/>
},
{
   path:"/contact",
  element:<Contact/>
},
{

  path:"/Restaurants/:resId",
  //: indicates it is dynamic
  element:<RestaurantMenu/>
  // loading this element
},
{
   path:"/Cart",
  element:<Cart/>
},

  ]
  // errorElement:<Error/>
},




]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>);