import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="home">
      <header>
        <div className="header-logo">
          Always Closed
        </div>
        <nav className="nav-desktop">
          <a href="/">Gallery</a>
          <a href="/">Artists</a>
          <a href="/">Our Shop</a>
          <a href="/">Contact</a>
        </nav>
        <nav className="nav-mobile">
          <FontAwesomeIcon Icon={faTimes} />
        </nav>
      </header>
      <div className="hero-wrap">
        <div className="hero">
          Not Your grandpa's Tattoo Shop<br/>
          Book Today with one of our artists
          <span className="hero-color-change">,It Will Definitely Take a While</span>
        </div>
      </div>
      <div className="white-corner-triangles">
        <div className="left-triangle"></div>
        <div className="right-triangle"></div>
      </div>
    </div>
  )
}
