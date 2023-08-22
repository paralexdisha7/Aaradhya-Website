import React from 'react'
import './css/service.css'
import Card from '../cards/Card'
const Services = () => {
  return (
    <div className='container'>
      <h2>Services</h2>
      <div className='cards'>
        <Card head="Banquet Hall" image="images\40.jpg" />
        <Card head="Conference Room" image="images\55.jpg"  />
        <Card head="Restaurant" image="images\60.jpg"  />
        <Card head="Residence" image="images\74.jpg"  />
        <Card head="Party Lawn" image="images\33.jpg"  />
        <Card head="Cinema Theatre" image="images\121.jpg"  />
      </div>
  
    </div>
  )
}

export default Services