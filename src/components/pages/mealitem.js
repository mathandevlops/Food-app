import React from 'react'
import Margartia  from '../assets/saahil-khatkhate-kfDsMDyX1K0-unsplash.jpg'
import '../styles/meal.css'

const Mealitem= (getMeal)=> {
  console.log(getMeal.data);
  return (
    <div class="card">
    <img src={getMeal.data.strMealThumb} alt="Denim Jeans" className='pizzaimage'/>
    <h1>{getMeal.data.strMeal}</h1>
    <p class="price">{getMeal.data.strArea}Food</p>
    <p>{getMeal.data.strCategory}</p>
    <p><button>Add to Cart</button></p>
  </div>
  )
}

export default Mealitem