// import { useRouteError } from "react-router";
const Error=()=>{
    // let err=useRouteError();
    // console.log(err);
    
    return(
        <div>
            <h1>Oops..!</h1>
            <h2>something went wrong</h2>
            {/* <h3>{err.status}</h3> */}
        </div>
    )
}
export default Error;