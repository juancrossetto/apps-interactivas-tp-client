import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';

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
        #layout {
          background: rgba(249,252,248,1);
          background: -moz-linear-gradient(top, rgba(249,252,248,1) 0%, rgba(255,255,255,1) 100%);
          background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(249,252,248,1)), color-stop(100%, rgba(255,255,255,1)));
          background: -webkit-linear-gradient(top, rgba(249,252,248,1) 0%, rgba(255,255,255,1) 100%);
          background: -o-linear-gradient(top, rgba(249,252,248,1) 0%, rgba(255,255,255,1) 100%);
          background: -ms-linear-gradient(top, rgba(249,252,248,1) 0%, rgba(255,255,255,1) 100%);
          background: linear-gradient(to bottom, rgba(249,252,248,1) 0%, rgba(255,255,255,1) 100%);
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9fcf8', endColorstr='#ffffff', GradientType=0 );
        }
      `}</style>
    </div>
  );
};
