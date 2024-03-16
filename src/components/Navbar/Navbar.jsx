import './Navbar.css'
import logo from '../../assets/duologo-black.png'
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

export default function Navbar() {
  const [ sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className='left'>
      <img src={logo} alt="logo" className='logo'/>
        <h3>Duo Diagnosticsware</h3>
      </div>
      <ul className={mobileMenu?'':'mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
        <li><Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
      </ul>
      <img src={menu} alt='menu' className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}
