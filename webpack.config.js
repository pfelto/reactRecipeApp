const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'eval',
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env', 'stage-0', 'react']
              }
            }
          }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin(
            {
                uglifyOptions: {
                    warnings: false,
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    output: {
                        comments: false,
                    },
                }
            }
        )],
    },
  };