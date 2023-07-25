import {BsLinkedin} from 'react-icons/bs'
import {FaSquareGithub} from 'react-icons/fa6'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/thiem-dev/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
        <a href="https://github.com/business-thiem" target="_blank" rel="noreferrer"> <FaSquareGithub/> </a>
        <a href="https://www.instagram.com/tnh_photo/" target="_blank" rel="noreferrer"> <FaInstagramSquare/> </a>
    </div>
  )
}
export default HeaderSocials