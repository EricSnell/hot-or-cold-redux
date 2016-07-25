var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
  // the entry point that webpack will use to start its search for dependencies, set to reflect the 'main' property in package.json
  entry: path.resolve(__dirname, packageData.main),
  output: {
    // saving the bundled javaScript file into the 'build' directory using the 'name' and 'version number' from the package.json
    path: path.resolve(__dirname, 'build'),
    filename: filename.join('.')
  },
  // tells webpack we want a source map building for our output file
  devtool: 'source-map',
  // In order to use Babel in our build system, we configure webpack to load javascript files
  module: {
    loaders: [
       // For all files with the '.jsx' extension that are not in the 'node_modules' directory, the babel loader should use ES2015 preset
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
