import React from 'react'
import "../styles/contact.css"

function Contact() {
  return (
    
    <div className='contact'>
      <h1>Contact Us</h1>
      <div className='border-box'>
        <label>Full Name</label>
      <input type='text' className='contact-input'/><br></br><br></br>
      <label>Email</label>
      <input type='email' className='contact-input'/><br></br><br></br>
      <label>Phone No</label>
      <input type='number' className='contact-input'/><br></br><br></br>
      <button type='submit' className='buttonmode'>Send Message</button>
      </div>
      
    </div>
  )
}

export default Contact