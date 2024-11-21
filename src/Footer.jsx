import React from 'react'
import './styles/Footer.scss'

// social logos
import githubLogo from '/images/githubLogo2.svg'
import linkedinLogo from '/images/linkedinLogo.svg'
import xLogo from '/images/xLogo.svg'
import instagramLogo from '/images/instagramLogo.svg'

export default function Footer() {
  return (
    <footer id='Contact'>
        <div className="pages">
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/blog'>Blog</a></li>
                <li><a href='/portfolio'>Portfolio</a></li>
            </ul>
        </div>
        <div className="contacts">
            <p>travisf@bu.edu | &#40;203&#41; 610-5471</p>
        </div>
        <div className="links">
            <ul>
                <li><a target="_blank" href="https://github.com/falktravis"><img src={githubLogo} alt="Git Hub" /></a></li>
                <li><a target="_blank" href="https://x.com/falktravis12"><img src={xLogo} alt="X" /></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/travis-falk/"><img src={linkedinLogo} alt="LinkedIn" /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/falk.travis18/"><img src={instagramLogo} alt="Instagram" /></a></li>
            </ul>
        </div>
    </footer>
  )
}
