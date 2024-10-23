import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './styles/App.scss'
import NavBar from './NavBar'
import Home from './Home'
import BlogHome from './BlogHome'
import Portfolio from './Portfolio'
import BlogPost from './BlogPost'

// Google Analytics
import ReactGA from 'react-ga4';
ReactGA.initialize('G-WTNW2PP5JK');

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path="/blog/:category" element={<BlogHome />} />
        <Route path="/blog/:category/:slug" element={<BlogPost />} />
      </Routes>
    </>
  )
}

export default App
