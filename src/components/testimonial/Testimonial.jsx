import React from 'react'
import './testimonial.css'

import images from './dynamic-imageImport.jsx'
images.pop(); //deletes the empty last element

const imgList = Object.keys(images).map(key => (
  <img src={images[key]} className="avatar__image" alt={key} />
))

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="avatar-img__container">
        {imgList}
      </div>




      
    </section>
  )
}


// console.log(`this is images`, images);

export default Testimonial