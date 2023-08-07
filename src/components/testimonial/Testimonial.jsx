import React from 'react'
import './testimonial.css'

//SWIPER IMPORT -------------  import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
//END SWIPER IMPORT

import reviewData from './testimonial-sample.jsx'
import images from './dynamic-imageImport.jsx'



images.pop(); //deletes the empty last element

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
          // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>

        {
          reviewData.map(({id, clientName, comment}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={images[id]} className="avatar__image" alt={"avatar image " + id + " of " + clientName} />
                </div>
                <h5 className="client__name">{clientName}</h5>
                <small className='client__review'>
                  {comment}
                </small>
              </SwiperSlide>

            )
          })
        }
      </Swiper>
    </section>
  )
}


// console.log(`this is images`, images);

export default Testimonial