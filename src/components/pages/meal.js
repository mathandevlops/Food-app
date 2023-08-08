import React, { useState } from 'react'
import Mealitem from './mealitem'

function Meal() {
  const[search,setSeacrch]= useState("")
  const [meal,setMeal] = useState()
  const searchMeals = (evt)=>{
    if(evt.key=="Enter"){
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res)=>res.json())
      .then (data=>{
        setMeal(data.meals)
      })
    }
  }
  return (
    <div className='mainboard'>
        <div>
            <h1>Search Your Food Recipe</h1>
            <h4>"Always, and I mean ALWAYS, an exceptional experience!"</h4>
        </div>
        <div className='searchbox'>
            <input type='search' className='search-bar' placeholder='Enter Your Food' onChange={(e)=>setSeacrch(e.target.value)} value={search} onKeyPress={searchMeals}/>
        </div>
        <br></br>
        <div className='container'>
          {
            (meal==null)? <p>Not Found</p> : meal.map((res)=>{
              return(
                <Mealitem data={res}/>
              )
            })
          }
        
        </div>
    </div>
  )
}

export default Meal