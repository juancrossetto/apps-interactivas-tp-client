import './_site-navbar.scss';

import React, { useState } from "react";

import Link from 'components/Link';
const Header = () => {


  return (
    <React.Fragment>
      <header className="Header">
        <div className="site-navbar">
          <div className="container">
            <div className="logo-header flex-grow-1 bd-highlight">
              <Link route="/">aprende<span>.com</span></Link>
            </div>
            <div className="main-nav">
              <nav className="site-navigation" role="navigation">
                <ul className="site-menu">
                  <li><a href=""><img className="icon" src="/home-icon.png"/></a></li>
                  <li> <a href=""><img className="icon" src="/info-icon.png"/></a></li>
                  <li><Link route="/puntajes" className="text-light"><img className="icon" src="/ranking-icon.png"/></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
     
        `}</style>
    </React.Fragment>
  )
}
export default Header;