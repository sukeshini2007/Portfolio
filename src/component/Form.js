import React from 'react'
import '../styles/Form.css'

export const Form = () => {
  return (
    <div className="form">
      <form className="formContainer" required>
        <label>Your Nmae</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea row="6" placeholder="Type Your Message"></textarea>
        <button className="btn1">Submit</button>
      </form>
    </div>
  )
}
