
import React from "react";
import ReactDOM from "react-dom/client"


const Title=()=><h1 className="head">hellloo</h1>

const HeadComponent=()=>(
  <div id="container">
    <Title/>
    <h1 className="heading">
      namsthe react functiona component
    </h1>
  </div>
)
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComponent/>);
