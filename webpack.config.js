let webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }
    // ,{ 
    //   test: /\.json$/,
    //   loader: 'json' 
    // }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
