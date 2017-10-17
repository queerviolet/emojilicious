module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/assets/',    
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: ['babel-loader']
    }]
  },
}