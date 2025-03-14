
// import React from "react";


import ReactDOM from "react-dom/client" 
import Header from "./components/Header"
import Body from "./components/Body"
import Counter from "./components/count"



const AppLayout=()=>{
  return(
   < div className="app">
    <Header/>
    <Body/>
    <Counter/>
   </div>
  )

}



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
