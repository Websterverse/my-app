import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Nav from './Nav';
import {Link} from "react-router-dom"
import Marvel from "../assets/marvel.png"
import Netflix from "../assets/movies_net.png"
import Disney from "../assets/dis.png"
import Prime from "../assets/prime.png"
import './c.css';
const Crousel = () => {



  return (
    <div>
      
      <div className='service' >

<Carousel     className='crl'  infiniteLoop autoPlay showStatus =  {false}   interval={2000}  showThumbs = {false}  >

<div    >
<img  className='img1' src={Disney} alt="item1" />


<p className='legend' >DISNEY</p>
</div>

<div   >
<img  className='img2'  src={Netflix} alt="item2" />


<p className='legend' > NETFLIX</p>
</div>

<div  >
{/* <img  className='img3'  src={Marvel} alt="item3" /> */}
<img  className='img3'  src="https://www.bizasialive.com/wp-content/uploads/2023/10/sony-live001.png" alt="item3" />


<p className='legend' > MARVEL</p>
</div>


<div   >
<img  className='img4' src={Prime} alt="item4" />


<p className='legend' >AMAZON PRIME</p>
</div>





</Carousel>



</div>


    </div>
  )
}

export default Crousel
