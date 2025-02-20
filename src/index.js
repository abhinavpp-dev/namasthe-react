
// import React from "react";
import React, { useState } from "react"

import ReactDOM from "react-dom/client"


const Header=()=>{
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All"/>
       </div>
       <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>

       </div>
       </div>
  )
}

const RestaurentCard=({name,image,cuisine,rating,deliveryTime,price,location})=>{
  console.log(RestaurentCard)
  return(
  
    <div className="res-card">
           <img className="image-card"
        alt="Restaurant Logo" 
        src={image}/>
      

      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{price}</h4>
      <h4>{location}</h4>
    </div>
  )

}
const Body=()=>{
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "The Burger House",
      image: "https://source.unsplash.com/400x300/?burger",
      rating: 4.5,
      cuisine: ["Fast Food", "Burgers"],
      deliveryTime: "30 mins",
      price: "$$",
      location: "MG Road, Bangalore"
    },
    {
      id: 2,
      name: "Spicy Indian Bites",
      image: "https://source.unsplash.com/400x300/?indianfood",
      rating: 4.7,
      cuisine: ["Indian", "North Indian"],
      deliveryTime: "25 mins",
      price: "$$",
      location: "Koramangala, Bangalore"
    },
    {
      id: 3,
      name: "Sushi Express",
      image: "https://source.unsplash.com/400x300/?sushi",
      rating: 4.3,
      cuisine: ["Japanese", "Sushi"],
      deliveryTime: "40 mins",
      price: "$$$",
      location: "Indiranagar, Bangalore"
    }
  ]);



  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search restaurent.."/>

      </div>

      <div className="res-container">

{restaurants.map((restaurant)=>(
  <RestaurentCard key={restaurant.id}{...restaurant}/>


))}
       
    
      </div>

    </div>
  )
}

const AppLayout=()=>{
  return(
   < div className="app">
    <Header/>
    <Body/>
   </div>
  )

}



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
