const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  mode:"development",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    fallback: {
      fs: false
    }
  }
};