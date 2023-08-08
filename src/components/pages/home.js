import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/home.css"


function Home() {
  return (
    <div className='home'>
      <div className='header'>
      <h1> Pedro's Pizzeria</h1>
      <h4>PIZZA TO FIT ANY TASTE</h4>
      </div>
      <Link>
      <button>ORDER NOW</button>
      </Link>
    </div>
    
  )
}

export default Home