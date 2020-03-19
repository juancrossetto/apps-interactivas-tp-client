import App, { Container } from "next/app";
import React from "react";


import '../styles/themes/bootstrap/bootstrap.scss';
import '../styles/themes/style.scss';


import { Provider } from "../Context";


export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    );
  }
}