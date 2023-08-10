/* eslint-disable jsx-a11y/anchor-is-valid */
import './footer.css'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Thiem Huynh</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href='https://facebook.com'> <FaFacebookSquare/> </a>
        <a href='https://instagram.com'> <FaInstagramSquare/> </a>
        <a href='https://twitter.com'> <FaTwitterSquare/> </a>
      </div>


      <div className="footer__copyright">
        <small>&copy; thiem-dev. All righst reserved.</small>
      </div>
    </footer>
  )
}

export default Footer