import logo from '/logo-footer.png'
import email_logo from '/email.svg'
import telegram_logo from '/telegram.svg'
import { NavBarFooter } from '../NavBar/NavBar'
import './Footer.css'


export default function Footer() {
    return (
      <footer>
        <div className='footer-container'>
          <div className='first-block'>
            <div className='logo-data'>
              <img className= "logo" src={logo} alt="Logo power bank" />
              <div className='under-logo'>Powerbank stations</div>
            </div>
          <NavBarFooter />
        </div>
          <div className='second-block'>
            <div className='info-politics'>
              <a href="#">Legal contracts and agreements</a>
              <a href="#">User guide</a>
              <a href="#">Functional characteristics of the software</a>
            </div>
            <div className='email-telegram'>
              <span><img src={email_logo} alt="Email logo" />power@gmail.com</span>
              <span><img src={telegram_logo} alt="Telegram logo" />@powerbot</span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  