import {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles/NavBar.scss'

export default function NavBar() {
  const [isHome, setIsHome] = useState(false);
  const location = useLocation(); // Access the current URL

  useEffect(() => {

    if(window.location.pathname === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
    <>
        <nav className={`NavBar home${isHome}`}>
            <h1><Link to='/'>Travis Codes</Link></h1>
            <ul>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><a id='contactButton' href='/#contact'>Contact</a></li>
            </ul>
        </nav>
    </>
  )
}
