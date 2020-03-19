import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react';

export default class MyDocument extends Document {
  componentDidMount () {
    window.onerror = function myErrorHandler(e) {
      // Just let default handler run.

      return false;
    }
  }
  render() {
    return (
      <html lang="es">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content="Agro Mercado, tu tienda online de ganado."></meta>
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
        <link href="/fonts/iconic/css/material-design-iconic-font.min.css" rel="stylesheet" />
        <link href="/fonts/icomoon/style.css" rel="stylesheet" />
        <link href="/fonts/linearicons-v1.0.0/icon-font.min.css" rel="stylesheet" />
      </Head>
      <body className="no-js">
        <Main />
        <NextScript />
        <div className="modal-ie">
          Detectamos que estás usando un explorador no compatible. Este sitio está optimizado para Internet Explorer Edge y Google Chrome.
          Por favor actualizá tu Browser para una mejor experiencia.
        </div>
      </body>
    </html>
    )
  }
}