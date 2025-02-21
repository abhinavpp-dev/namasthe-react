import React, { useState } from "react"
import RestaurentCard from "./RestaurentCard";
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
      rating: 3.7,
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
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);



  return (  
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          setFilteredRestaurants(restaurants.filter((restaurant)=>restaurant.rating>4))
          


        }}>TOP Rated Restaurent</button>

      </div>

      <div className="res-container">

{restaurants.map((restaurant)=>(
  <RestaurentCard key={restaurant.id}{...restaurant}/>


))}
       
    
      </div>

    </div>
  )
}

export default Body