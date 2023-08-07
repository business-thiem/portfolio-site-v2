import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__options">
            <MdEmail/>
            <h4>Email</h4>
            <h5>thiem.huynh0@gmail.com</h5>
            <a href="mailto:thiem.huynh0@gmail.com">Send a Message</a>
          </article>
          <article className="contact__options">
            <FaFacebookMessenger/>
            <h4>Messenger</h4>
            <h5>thiem.huynh0@gmail.com</h5>
            <a href="https://m.me/thiem.huynh" target="_blank" rel="noreferrer" >Send a Message</a>
          </article>
          <article className="contact__options">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+1678-549-0369</h5>
            <a href="https://api.whatsapp.com/send?phone=16785490369" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact