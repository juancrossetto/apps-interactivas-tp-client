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
              <Link route="/inicio">aprende<span>.com</span></Link>
            </div>
            <div className="main-nav">
              <nav className="site-navigation" role="navigation">
                <ul className="site-menu">
                  <li><Link route="/" className="text-light"><img className="icon" src="/static/img/home-icon.png"/></Link></li>
                  <li><Link route="/ayuda" className="text-light"><img className="icon" src="/static/img/info-icon.png"/></Link></li>
                  <li><Link route="/puntajes" className="text-light"><img className="icon" src="/static/img/ranking-icon.png"/></Link></li>
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