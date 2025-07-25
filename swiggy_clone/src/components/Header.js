import { LOGO_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus'
import { useSelector } from 'react-redux';


const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  console.log('header render');
  
  useEffect(()=>{
    console.log("useEffect rendered");
  },[btnNameReact])
  
  const OnlineStatus=useOnlineStatus();

  // subscribing to the store using Selectors

  const cartItems = useSelector((store)=>store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between border-1  items-center bg-fuchsia-50 m-2  mouse cursor-pointer" >
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="w-36 mx-6 " />
      </div>
      <div className="navitems">
        <ul className='flex justify-end-safe'>
          
          <li className='px-4 m-4 '>{OnlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li className='px-4 m-4 items-center hover:text-red-400'>
            <Link to="/">Home</Link>
            </li>
          <li className='px-4 m-4  hover:text-red-400'>
             <Link to="About/">About Us</Link>
            
            </li>
          <li className='px-4 m-4  hover:text-red-400'>
             <Link to="Contact/">Contact Us</Link>
            
            </li>
          <li className='px-4 m-4 items-center  font-bold hover:text-red-400 text-xl '>
            
            <Link to="Cart/"> Cart-{(cartItems?.length)}</Link>
            
            </li>
          <button className='px-4 m-4 items-center '
            
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
           >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;