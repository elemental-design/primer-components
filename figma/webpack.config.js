const path = require('path')
const configure = require('react-figma-webpack-config')

module.exports = configure({
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: {
          loader: require.resolve('ts-loader'),
          options: {
            // this will disable any type checking for js/jsx files, but use TS to transform jsx
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react/'),
      'react-figma': path.resolve(__dirname, './node_modules/react-figma/'),
      'styled-components': path.resolve(__dirname, './src/styled'),
      '@primer/components': path.resolve(__dirname, '../dist/index.esm.js'),
    },
  },
})
