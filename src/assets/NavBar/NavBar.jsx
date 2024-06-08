import Button from "../../common/Button"
import "./NavBar.css"

export function NavBar() {
    return (
        <nav className='block-navbar'>
            <div className='elements'>
              <Button id='about' text='About us' onClick={() => {}}/>
              <Button id='contacts' text='Contacts' onClick={() => {}}/>
              <div className='auth'>
                <Button id='SignIn' text='Sign in' onClick={() => {}}/>
                <Button id='SignUp' text='Sign up' onClick={() => {}}/>
              </div>
            </div>
          </nav>
    )
}

export function NavBarFooter() {
  return (
    <nav className='block-navbar-footer'>
        <div className='elements'>
          <Button id='station-map' text='Station map' onClick={() => {}}/>
          <Button id='rates' text='Rates' onClick={() => {}}/>
          <Button id='about' text='About us' onClick={() => {}}/>
          <Button id='contacts' text='Contacts' onClick={() => {}}/>
          <Button id='Rent' text='Rent' onClick={() => {}}/>
        </div>
      </nav>
    )
}

