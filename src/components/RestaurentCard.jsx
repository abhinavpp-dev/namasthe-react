
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

export default RestaurentCard