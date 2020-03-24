import React from 'react';
import Layout from './Layout';

export default ({ children, isAuth }) => {
    return (
      <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Description" content=""></meta>
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
        <link href="/fonts/iconic/css/material-design-iconic-font.min.css" rel="stylesheet" />
        <link href="/fonts/icomoon/style.css" rel="stylesheet" />
        <link href="/fonts/linearicons-v1.0.0/icon-font.min.css" rel="stylesheet" />
      </head>
      <body className="no-js">
        <Layout>{children}</Layout>
      </body>
    </html>
    )
}


