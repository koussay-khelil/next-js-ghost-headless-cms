require('dotenv').config()

const withSass = require('@zeit/next-sass')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const webpack = require('webpack')
module.exports = withSass({
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))

    if(config.resolve.plugins) {
        config.resolve.plugins.push(new TsConfigPathsPlugin())
    } else {
        config.resolve.plugins = [new TsConfigPathsPlugin()]
    }

    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    };
  },
  serverRuntimeConfig: { // Will only be available on the server side
   ghost: {
       url: <your_url></your_url>,
       key: <your_key></your_key>,
       version: "v3",
   }
  },
  publicRuntimeConfig: { // Will be available on both server and client
    ghost: {
      url: <your_url></your_url>,
      key: <your_key></your_key>,
      version: "v3",
    }
  }
})
