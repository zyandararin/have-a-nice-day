const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const CopyWepbackPluign = require('copy-webpack-plugin');

const src = path.join(__dirname, 'src');
const docs = path.join(__dirname, 'docs');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/app.min.js',
    libraryTarget: 'umd',
    path: docs
  },
  plugins: [
    new CopyWepbackPluign([
      {
        context: path.join(src, 'assets'),
        from: '**/*',
        to: docs
      }
    ])
  ]
});
