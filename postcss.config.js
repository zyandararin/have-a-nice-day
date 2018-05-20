const path = require('path');
const autoprefixer = require('autoprefixer');
const csswring = require('csswring');
const postcssCalc = require('postcss-calc');
const postcssCustomMedia = require('postcss-custom-media');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const reporter = require('postcss-reporter');
const stylelint = require('stylelint');

const src = path.join(__dirname, 'src');

module.exports = {
  plugins: [
    postcssImport({
      path: path.join(src, '/css'),
      plugins: [stylelint()]
    }),
    postcssCustomMedia,
    postcssCustomProperties({
      preserve: false,
      warnings: true,
      noValueNotifications: 'error'
    }),
    postcssCalc,
    postcssNested,
    postcssFlexbugsFixes,
    autoprefixer({
      browsers: ['> 0.25%', 'ie >= 11', 'not op_mini all']
    }),
    reporter({
      clearReportedMessages: true
    }),
    csswring()
  ]
};
