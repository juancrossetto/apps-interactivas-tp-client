// Load env variables automatically (from docker secrets or env)
require('dotenv').config();

// next.config.js
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const path = require('path');
/**
 * Get a Docker Secret, with env variables as a fallback
 * @param key {string}
 * @returns {string|null}
 */
const getSecret = (key) => {
  return process.env[key] || undefined;
};

// This is PUBLIC
const publicRuntimeConfig = {

};

// This is PRIVATE / SECRET
const serverRuntimeConfig = {
  PORT: getSecret('PORT'),
  NODE_ENV: getSecret('NODE_ENV'),
  USE_HTTPS: getSecret('USE_HTTPS')
};

module.exports = withCSS(withSass({
  publicRuntimeConfig,
  cssLoaderOptions: {
    url: false
  }, webpack: config => { 

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
      loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    });

    config.module.rules.push({  
      test : /\.(ts|ts.map|js.map|js.flow)$/,
      use : "ignore-loader"
    });

    return config;
  }
}));