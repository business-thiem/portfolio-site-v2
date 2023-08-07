import React from 'react'
import './testimonial.css'
import reviewData from './testimonial-sample.jsx'
import images from './dynamic-imageImport.jsx'
images.pop(); //deletes the empty last element

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {
          reviewData.map(({id, clientName, comment}) => {
            return (
              <article className="testimonial">
                <div className="client__avatar">
                  <img src={images[id]} className="avatar__image" alt={"avatar image " + id + " of " + clientName} />
                </div>
                <h5 className="client__name">{clientName}</h5>
                <small className='client__review'>
                  {comment}
                </small>
              </article>

            )
          })
        }
      </div>
    </section>
  )
}


// console.log(`this is images`, images);

export default Testimonial