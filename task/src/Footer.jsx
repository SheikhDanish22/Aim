import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='footer'>
    <div style={{backgroundColor:"aqua", width:"100px"}}>
      {/* <h1 >Footer</h1> */}
      <div style={{display:"flex", justifyContent:"space-around",  alignItems:"center", width:"200vh",fontSize:"20px",  backgroundColor:"whitesmoke", color:"black"}}>
      <div style={{cursor:"pointer"}}>
      <li>E-Commerce & Retail</li>
      <li>Healthcare & Life Sciences</li>
      <li>Education & E-Learning</li>
      <li>Healthcare & Life Sciences</li>
      <li>Travel & Hospitality</li>
      </div>

      <div style={{textAlign:"center", cursor:"pointer"}}>
      <li>Finance & Fintech</li>
     



<li>Real Estate</li>

<li>Technology & Startups</li>

<li>Entertainment & Media</li>
  <li>Our Approach</li>

      </div>
      <div id="icon">
        <ul>
      <li><a href="https://www.instagram.com/bhoopendra___97/"><FaInstagram /></a></li>
     <li> <FaLinkedin /></li>
     <li><FaFacebookSquare /></li>
      </ul>
      </div>
      
      </div>

      


    </div>
    </div>
  )
}

export default Footer;
