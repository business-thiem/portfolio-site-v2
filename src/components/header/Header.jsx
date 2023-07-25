import './header.css'
import CTA from './CTA'
import mypic1 from '../../assets/thiem-pro-photo.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Thiem (Tim) Huynh</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className="profilePic">
          <img src={mypic1} alt="Tim in a suit" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header