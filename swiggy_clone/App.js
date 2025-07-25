
import React from "react";
import ReactDom from "react-dom/client";
/**
 * header
 * -logo
 * -nav items
 * body
 * -search
 * -restaurentContainer
 *   restrocard
 *   -img
 *   -name of res,star rating,cusine,delivery time 
 * Footer
 * -copyright
 * -Links
 * -Address
 * -Container
 */
const Header=()=>{
   return(
    <div className="header">
      <div className="logo-container">
      <img  className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=All&sf=&txt_keyword="/>
    </div>
    <div className="nav-items">
      
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>contact</li>
            <li>cart</li>
        </ul>
    </div>
       
    </div>

   )

}
const RestaurentCard=(props)=>{
  // props is javascript object now so we have to cal in curly bracesc so it is like javascript
  return(
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img className="res-logo"
      alt="res-logo"
      src={props.img}
      />
      
      <h3>{props.resName}</h3>
      <h4>{props.cusine}</h4>
      <h4>38 mins</h4>
      {/* <h3>meghana foods</h3>
      <h4>biryani,north indian</h4>
      <h4>38 mins</h4> 
       */}
      
    </div>
   
  )
}
const Body=()=>{
  return(
    <div className="body">
      <div className="search">search</div>
      <div className="res-container"> 
        <RestaurentCard resName="meghana Foods"
                        cusine="Biryani,North Indian,Asian"
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSea0oouJ2aLUdeD8xNVQBdcf_AiECvY-HriwDWo2NyPJ6kQQl_4ic0hLZqxxrkJFpGR18&usqp=CAU"
                        
        />
        <RestaurentCard resName="KFC" cusine="burger,Fast food" img="https://b.zmtcdn.com/data/pictures/chains/7/20287/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|750:500&crop=750:500;*,*"/>
         <RestaurentCard resName="KFC" cusine="burger,Fast food" img="https://content.jdmagicbox.com/v2/comp/delhi/x6/011pxx11.xx11.230101185944.w7x6/catalogue/kfc-vivekanand-puri-delhi-american-restaurants-rut6vpclea.jpg"/>
          <RestaurentCard resName="KFC" cusine="burger,Fast food" img="https://connectingjamaica.com/wp-content/uploads/2024/12/kfc-in-jamaica-952.jpg"/>
           <RestaurentCard resName="KFC" cusine="burger,Fast food" img="https://cdn4.singleinterface.com/files/enterprise/coverphoto/34404/Taste-the-Epic-Banner-14-11-24-02-59-58.jpg"/>
            <RestaurentCard resName="KFC" cusine="burger,Fast food" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUTjrlwu-RHhvoVfJuYqD_eeCXVGU5d8n_g&s"/>
            <RestaurentCard resName="mutton" cusine="mutton,Fast food" img="https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"/>
            <RestaurentCard resName="mutton" cusine="muttn,Fast food" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkIYXyQ8YvdloqFq9iZAAcL95GwCk30Kj3g&s"/>
            <RestaurentCard resName="mutton" cusine="mutton,Fast food" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDp9MHqak3a-Rjhhht4oTcRSyitNZehCeyVg&s"/>
            <RestaurentCard resName="mutton" cusine="mutton,Fast food" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1N9VgsVRY1mFhlTksrz1qtaVmJ6YyvEu-Cw&s"/>
            <RestaurentCard resName="seafood" cusine="fish,seafood" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBWndmGgNIUqXuNuoSvG7azKTC1S4ykDs5MHNt3xQqeB-cGaEHqT9L34CCsRGxEPO_8U&usqp=CAU"/>
             <RestaurentCard resName="seafood" cusine="fish,seafood" img="https://www.indianhealthyrecipes.com/wp-content/uploads/2024/06/baked-fish-oven-grilled-fish-500x375.jpg"/>
              <RestaurentCard resName="seafood" cusine="fish,seafood" img="https://www.teaforturmeric.com/wp-content/uploads/2023/06/Fish-Curry-Recipe.jpg"/>
               <RestaurentCard resName="seafood" cusine="pronz,seafood" img="https://i.ytimg.com/vi/peaJ71kgJJ0/sddefault.jpg"/>
               <RestaurentCard resName="seafood" cusine="pronz,seafood" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSn_YHUcJDVEW5SdZWbM23CDy_yJ-QVOOGw&s"/>
               <RestaurentCard resName="seafood" cusine="pronz,seafood" img="https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/prawns-fry-recipe-500x375.jpg"/>
               




        </div>
          
      </div>
  )
}
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
const AppLayout=()=>{
  return(
    <div className="app">
        {Header()}
        <Body/>
        <Footer/>
    </div>
  )

}
 
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)