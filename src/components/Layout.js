import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import React from 'react'
import ReactDOM from 'react-dom'

export default ({ children, isAuth }) => {


  const headerProps = {
    isAuth,
  };


  return (
    <div id="layout">
      <Header {...headerProps} />
      <Main>
        {children}
      </Main>
      <Footer></Footer>
      <style jsx>{`
          body{
            background: #f7f1f0;
          }
          #layout {
            margin: 2em auto;
          }
      `}</style>
    </div>
  );
};
