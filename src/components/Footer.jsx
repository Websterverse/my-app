import React from 'react'
import './footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { GiQueenCrown } from "react-icons/gi";  
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
  return (
    <>

<div className='f' >


<div className='brand' >

<FaInstagram   className='insta'  />
<FaFacebookSquare className='insta'  />
<FaSquareTwitter className='insta' />
<IoLogoYoutube className='insta'  />
<BsTelegram className='insta'  />

</div>

<div className='navs' >
<h2>Home</h2>
<h2>About</h2>
<h2>Contact Us</h2>
<h2> Our Team </h2>



</div>

<center>
<h3  className='f-info' >Copyright &copy;2024; || Designed by {<GiQueenCrown/>}  KING </h3>
</center>



</div>





    </>
  )
}

export default Footer
