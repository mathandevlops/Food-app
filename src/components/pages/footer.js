import React from 'react'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
import Twitter from '../assets/square-twitter.svg'
import "../styles/footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='sociallinnk'>
        <img src={Instagram}/><img src={Facebook}/><img src={Twitter}/>
        </div>
        <div>
            <a>2021 pedrotechpizza.com</a>
        </div>
    </div>
  )
}

export default Footer