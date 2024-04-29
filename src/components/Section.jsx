import React from 'react'
import './section.css';
import Sony from "../assets/sonyliv.png"
import Hotstar from "../assets/hotstar.png"
import Netflix from "../assets/netflix.jpg"
import Prime from "../assets/prime.png"
// import Add from "../assets/add.png"
import Add1 from "../assets/add1.png"
// import { RiAddLine } from "react-icons/ri";

 
const Section = () => {
  return (
    < >



<div className='sec' >
<h1 className='p' >OTT PLATFORMS</h1>
<div className='logos' >
<div>
<div  className='l1'>
<img  className='l1_img' src={Sony} alt="" />
</div>
<h1  className='qwerty' >SONY LIV </h1>
</div>


<div>
<div  className='l2'>
<img  className='l1_img'  src={Netflix} alt="" />
</div>
<h1  className='qwerty'  >NETFLIX</h1>

</div>


<div>
<div  className='l3'>
<img className='l3_img'  src={Hotstar} alt="" />
</div>
<h1   className='qwerty'  >HOTSTAR  </h1>
</div>


<div>
<div  className='l4'>
<img  className='l4_img' src={Prime} alt="" />
</div>
<h1 className='more     qwerty ' >PRIME</h1>
</div>


<div>
<div  className='l4'>
<img  className='l4_img' src={Add1} alt="" />
</div>
<h1 className='more qwerty ' >More</h1>
</div>




</div>

</div>




    </>
  )
}

export default Section
