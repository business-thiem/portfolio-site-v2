import React from 'react'
import './about.css'
import me2 from '../../assets/mil-thiem.jpg'
import {FaAward} from 'react-icons/fa'
import {FaHammer} from 'react-icons/fa'
import {BiSolidNetworkChart} from 'react-icons/bi'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me </h2>



      <div className="container about__container">
        <div class="about__me">
          <div className="about__me-image">
            <img src={me2} alt="thiem holding camera"/>
          </div>
        </div>

        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year in Industry</small>
            </article>

            <article className="about__card">
              <FaHammer className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ completed</small>
            </article>

            <article className="about__card">
              <BiSolidNetworkChart className='about__icon'/>
              <h5>Network</h5>
              <small>300+ LinkedIn Connections</small>
            </article>
            
            
            
          </div>
          <div className="about__text">
              <p>
                <h6>&#40;disclaimer: numbers are for presentation purposes only&#41;</h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non porta turpis. Sed at placerat lectus, sed tristique magna. In ac justo nec ligula aliquet placerat. Suspendisse nec justo ante. Duis eleifend eu orci vulputate tempus. Nam sit amet ipsum malesuada, pharetra tortor in, ullamcorper odio. Donec vitae ultrices lectus. Nulla ornare velit sit amet purus egestas, sit amet malesuada urna iaculis. 
              </p>
              <div className="btn-container">
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About