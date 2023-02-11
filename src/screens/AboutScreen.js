import React from 'react'
import { Image } from 'react-bootstrap'

function AboutScreen() {
  return (
    <div>
      <h2 className='About'>About The Artist</h2>
      <Image src='https://images.pexels.com/photos/5376665/pexels-photo-5376665.jpeg?auto=compress&cs=tinysrgb&w=600'></Image>
      <p>Marjorie is the creator of all products on this website *unless we run out of time and there will be stock images*. She lives in Trinidad and Tobago.</p>
    </div>
  )
}

export default AboutScreen
