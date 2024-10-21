import React from 'react'
import { Link } from 'react-router-dom'
import './styles/NavBar.scss'

export default function NavBar() {
  return (
    <>
        <div className='NavBar'>
            <h1><Link to='/'>Travis Falk</Link></h1>
            <ul>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><a id='contactButton' href='/#contact'>Contact</a></li>
            </ul>
        </div>
    </>
  )
}
