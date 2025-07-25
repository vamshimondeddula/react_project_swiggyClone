import React from "react"
  
class UserClass extends React.Component{
    constructor (props){
    super(props);
this.state={
    count1:0,
    count2:1
}
}



    render(){
        const{name}=this.props;
        const{count1,count2}=this.state;
        return(<div className="user-card">
             <button className="btn_increment" onClick={
                ()=>{                 
                    this.setState({
                        count1:count1+1
                    });
                    // as it is immutable we cannot update state variable      
                    }
                                                        }>btn</button>
        <h1>count1={count1}</h1>
       < h1>count2={count2}</h1>
        <h1>Name:{name}</h1>
        <h2>locatin:uppal</h2>
        <h3>Contact:56789</h3>
        </div>
        )
    }
}
 export default UserClass;