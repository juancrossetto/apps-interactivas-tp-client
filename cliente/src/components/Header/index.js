import './_site-navbar.scss';

import React, { useState } from "react";

import Link from 'components/Link';


const Header = () => {


  return (
    <React.Fragment>
      <header className="Header">
        <div className="site-navbar py-2">
          <div className="search-wrap">
            <div className="container">
              <a href="#" className="search-close js-search-close"><span className="icon-close2"></span></a>
              <form action="#" method="post">
                <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
              </form>
            </div>
          </div>
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="logo-header flex-grow-1 bd-highlight">
                <Link route="/">APP</Link>
              </div>
              <div className="main-nav d-none d-lg-block">
                <nav className="site-navigation text-right text-md-center" role="navigation">
                  <ul className="site-menu js-clone-nav d-none d-lg-block">
                    <li> <a href="">Item 1</a></li>
                    <li> <a href="">Item 2</a></li>
                    <li> <a href="">Item 3</a></li>
                  </ul>
                </nav>
              </div>
              <div className="icons">
                <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a>
                <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu"></span></a>
              </div>
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