import React from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';

import { useRef } from 'react';
import emailjs from 'emailjs-com';





const Contact = () => {
  
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nymit52', 'template_mmrwrkd', form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                <MdEmail className="contact__option-icon"/>
                <h4>Email</h4>
                <h5>thiem.huynh0@gmail.com</h5>
                <a href="mailto:thiem.huynh0@gmail.com">Send a Message</a>
                </article>
                <article className="contact__option">
                <FaFacebookMessenger className="contact__option-icon"/>
                <h4>Messenger</h4>
                <h5>thiem.huynh0@gmail.com</h5>
                <a href="https://m.me/thiem.huynh" target="_blank" rel="noreferrer" >Send a Message</a>
                </article>
                <article className="contact__option">
                <BsWhatsapp className="contact__option-icon"/>
                <h4>WhatsApp</h4>
                <h5>+1678-549-0369</h5>
                <a href="https://api.whatsapp.com/send?phone=16785490369" target="_blank" rel="noreferrer">Send a Message</a>
                </article>
            </div>

            {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail}>
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