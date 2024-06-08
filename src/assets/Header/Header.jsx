import logo from '/logo.png'
import { NavBar } from '../NavBar/NavBar'
import './Header.css'

export default function Header() {
    return (
      <header>
        <div className='container'>
          <img className= "block-logo" src={logo} alt="Logo power bank" />
          <NavBar/>
        </div>
      </header>
    )
  }
