import React from 'react'
import './css/nearby.css'
import Card from '../cards/Card'
const Nearby = () => {
  return (
    <div className='container'>
      <h2>Nearby</h2>
      <div className='cards'>
        <a href="https://goo.gl/maps/xhqN4ACTo9nLGGM57"><Card head="Sawantwadi" image="images\sawantwadi.jpg" text="Distance : 15km "  /></a>
        <a href="https://goo.gl/maps/mweyYMetkCbCLH1W8"><Card head="Kudal" image="images\kudal.jpeg" text="Distance : 10km"  /></a>
        <a href="https://goo.gl/maps/BUmf8zyStPCSxxa47"><Card head="Vengurla" image="images\vengurla.jpeg" text="Distance : 15km"  /></a>
        <a href="https://goo.gl/maps/e4ztgV221jMsakdLA"><Card head="Malvan" image="images\malvan.jpeg" text="Distance : 30km"  /></a>
        <a href="https://goo.gl/maps/hhBz9FiQHZiXXJXy5"><Card head="Mopa Airport" image="images\mopa.jpeg" text="Distance : 50km"  /></a>
        <a href="https://goo.gl/maps/9uiXQSECn2m8Vf1QA"><Card head="Goa (Panjim)" image="images\goa.jpeg" text="Distance : 70km"  /></a>
        
        
       
  
      </div>

    </div>
  )
}

export default Nearby