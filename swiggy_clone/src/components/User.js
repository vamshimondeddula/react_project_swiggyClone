import { useState } from "react";

const User=(props)=>{
    const[count,setcount]=useState(0);
    return(
        
        <div className="user-card">
            <button className="btn_increment" onClick={
                ()=>{
                   
                    setcount(count+1)
                    // as it is immutable we cannot update state variable
                    
            }
                
            }>btn</button>
        <h1>Count={count}</h1>
        <h1>{props.name}</h1>
        <h2>locatin:uppal</h2>
        <h3>Contact:56789</h3>
       
        </div>
        

    );
};
export default User;